import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as fs from "fs";
import * as path from "path";
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }


   private readonly dataPath = path.resolve(process.cwd(), "nigeria.json");

  private loadData() {
    try {
      const data = fs.readFileSync(this.dataPath, "utf8");
      return JSON.parse(data);
    } catch (error) {
      throw new InternalServerErrorException("Could not load state data");
    }
  }

  getStates(query: any) {
    const data = this.loadData();
    const { stateName, lga } = query;
    let found;
    if (stateName) {
      found = data.find(
        (s) => s.state.toLowerCase() === stateName.toLowerCase()
      )?.lgas??[]
    } else if (lga) {
      found = data.flatMap((s) => s.lgas).sort();
    } else {
      found = data.map((s) => s.state).sort();
    }
return found;

  }
}
