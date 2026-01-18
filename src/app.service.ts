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
    let found = [];

    if (stateName && lga) {
      const state = data.find((s) => s.state.toLowerCase() === stateName.toLowerCase());
      if (state) {
        const selectedLga = state.lgas.find((l) => l.name.toLowerCase() === lga.toLowerCase());
        found = selectedLga ? selectedLga.cities : [];
      }
    } else if (stateName) {
      const state = data.find(
        (s) => s.state.toLowerCase() === stateName.toLowerCase()
      );
      found = state ? state.lgas.map((l) => l.name).sort() : [];
    } else if (lga) {
       // If lga is provided, try to find it across all states
       const allLgas = data.flatMap((s) => s.lgas);
       if (typeof lga === 'string' && lga.length > 0) {
           const selectedLga = allLgas.find((l) => l.name.toLowerCase() === lga.toLowerCase());
           found = selectedLga ? selectedLga.cities : [];
       } else {
           // Fallback if lga is present but empty/true? Return all LGA names
           found = allLgas.map((l) => l.name).sort((a, b) => a.localeCompare(b));
       }
    } else {
      found = data.map((s) => s.state).sort();
    }
    return found;
  }
}
