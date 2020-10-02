import { HeroStats } from "./heroStats";

export interface Hero {
    id: number;
    name: string;
    age: number;
    size: number;
    birthPlace: string;
    birthDate: string;
    description: string;
    stats: Array<HeroStats>;
    stat7: HeroStats;
    stat99: HeroStats;
    image: string;
  }
