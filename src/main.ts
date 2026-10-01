import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { join } from "path";
import { Logger, ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as express from "express";
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from "@nestjs/swagger";
import helmet from "helmet";

import { EncryptionInterceptor } from "middleware/encrypt.middleware";
import { DecryptInterceptor } from "middleware/decrypt.middleware";
import { FileLogger } from "./logger/file-logger.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // use file logger so errors are written to logs/error.log
  app.useLogger(new FileLogger());

  // app.useGlobalInterceptors(new DecryptInterceptor());
  // app.useGlobalInterceptors(new EncryptionInterceptor());

  app.use(helmet({
    contentSecurityPolicy: {
      useDefaults: false,
      directives: {
        defaultSrc: ["'self'"],
        imgSrc: ["'self'", "data:", "blob:", "https:", "http:"],
        styleSrc: ["'self'", "'unsafe-inline'", "https:", "http:"],
        scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https:", "http:"],
        connectSrc: ["'self'", "https:", "http:", "ws:", "wss:"],
        fontSrc: ["'self'", "data:", "https:", "http:"],
        mediaSrc: ["'self'", "data:", "https:", "http:"],
        frameSrc: ["'self'", "https:", "http:"],
        workerSrc: ["'self'", "blob:"],
        manifestSrc: ["'self'"],
        objectSrc: ["'none'"],
        baseUri: ["'self'"],
        formAction: ["'self'"],
      },
    },
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: { policy: "cross-origin" },
    crossOriginOpenerPolicy: { policy: "same-origin-allow-popups" },
  }));
  // app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    credentials: true,
    origin: (origin, callback) => {
      // Allow any localhost origin (any port) plus explicit production origins
      if (
        !origin ||
        origin.startsWith('http://localhost') ||
        origin.startsWith('http://127.0.0.1') ||
        origin === 'https://www.smartprints.ng' ||
        origin === 'https://smartprints.ng' ||
        origin === 'https://api.smartprints.ng'
      ) {
        return callback(null, true);
      }
      // Lenient fallback so dev preview / staging URLs also work
      return callback(null, true);
    },
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Origin',
      'Accept',
      'access-control-allow-origin',
      'referrer-policy',
      'X-Requested-With',
      'Accept-Language',
      'Content-Language',
      'Range',
    ],
    exposedHeaders: ['Content-Disposition', 'Content-Length', 'Content-Range'],
    maxAge: 3600,
    // Nest MUST answer OPTIONS preflights directly (204). When preflightContinue
    // is true the OPTIONS request reaches route handlers which don't implement
    // OPTIONS, causing 404/405 on preflight and breaking every POST/PATCH with
    // custom headers (Authorization, Content-Type: application/json, etc.).
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  // Explicit CORS for static upload file endpoint (ensures img crossOrigin="anonymous" works)
  app.use('/v1/upload/file', (req: any, res: any, next: any) => {
    const reqOrigin = req.headers.origin || '*';
    res.header('Access-Control-Allow-Origin', reqOrigin);
    res.header('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Range, Origin, Content-Type, Accept');
    res.header('Access-Control-Expose-Headers', 'Content-Length, Content-Range, Content-Disposition');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Cross-Origin-Resource-Policy', 'cross-origin');
    res.header('Cross-Origin-Embedder-Policy', 'credentialless');
    if (req.method === 'OPTIONS') {
      return res.sendStatus(204);
    }
    next();
  });

  const config = app.get(ConfigService);
  // app.useGlobalFilters(new HttpExceptionFilter())

  const globalPrefix = "v1";
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 1912;
  await app.startAllMicroservices();

  const configSwag = new DocumentBuilder()
    .setTitle("DiFamar")
    .setDescription(
      `
      Authentication tokens information:
      - Access Token expiration: 1 day
      - Refresh Token expiration: 1 month
    `
    )
    .setVersion("1.0")
    .addBearerAuth(
      {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        name: "Authorization",
        in: "header",
      },
      "access-token" // name of security scheme
    )
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };
  const document = SwaggerModule.createDocument(app, configSwag, options);

  // const document = SwaggerModule.createDocument(app, configSwag);
  SwaggerModule.setup("docs", app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      filter: true,
      showRequestDuration: true,
      displayRequestDuration: true,
      displayResponseTime: true,
      displayResponseStatusCode: true,
      displayResponseStatus: true,
    },
  });

  await app.listen(port, () => {
    Logger.log("Listening at http://localhost:" + port + "/" + globalPrefix);
    Logger.log("Documentation at http://localhost:" + port + "/docs");
    Logger.log(`Running in ${config.get("environment")} mode`);
  });
}
bootstrap();
