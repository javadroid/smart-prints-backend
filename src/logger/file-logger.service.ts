import { LoggerService } from "@nestjs/common";
import * as fs from "fs";
import * as path from "path";

const LOG_DIR = path.join(process.cwd(), "logs");
const ERROR_LOG = path.join(LOG_DIR, "error.log");

// ensure logs directory exists
if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

function timestamp() {
  return new Date().toISOString();
}

export class FileLogger implements LoggerService {
  log(message: any, context?: string) {
    // keep console output intact
    console.log(message, context ?? "");
  }

  error(message: any, trace?: string, context?: string) {
    // write errors to file and also to console
    const entry = `[${timestamp()}] ERROR${context ? " " + context : ""} - ${typeof message === "string" ? message : JSON.stringify(message)}${trace ? "\nTrace: " + trace : ""}\n`;
    fs.appendFile(ERROR_LOG, entry, (err) => {
      if (err) console.error("Failed to write to error log:", err);
    });
    console.error(message, trace ?? "", context ?? "");
  }

  warn(message: any, context?: string) {
    console.warn(message, context ?? "");
  }

  debug?(message: any, context?: string) {
    if (process.env.NODE_ENV !== "production") {
      console.debug(message, context ?? "");
    }
  }

  verbose?(message: any, context?: string) {
    if (process.env.NODE_ENV !== "production") {
      console.log(message, context ?? "");
    }
  }
}

// register global process handlers so uncaught errors/rejections also get logged
process.on("uncaughtException", (err) => {
  const entry = `[${timestamp()}] UNCAUGHT_EXCEPTION - ${err?.message ?? err}\n${err?.stack ?? ""}\n`;
  fs.appendFileSync(ERROR_LOG, entry);
  console.error("Uncaught Exception:", err);
});
process.on("unhandledRejection", (reason) => {
  const entry = `[${timestamp()}] UNHANDLED_REJECTION - ${typeof reason === "string" ? reason : JSON.stringify(reason)}\n`;
  fs.appendFileSync(ERROR_LOG, entry);
  console.error("Unhandled Rejection:", reason);
});