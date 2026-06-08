export enum ArmorType {
  None = "Ninguna",
  Medium = "Media (M)",
  Heavy = "Pesada (H)",
}

export enum MonsterType {
  Minion = "Minion",
  Normal = "Normal",
  Elite = "Elite / Especialista",
  Leader = "Líder",
}

export interface TrapDetail {
  name: string;
  effect: string;
}

export interface MonsterAction {
  name: string;
  description: string;
  damageDice?: string;
  range?: number;
  isMultiAttack?: boolean;
  multiattackCount?: number;
}

export interface MonsterAbility {
  name: string;
  trigger?: string;
  description: string;
}

export interface Monster {
  id: string;
  name: string;
  englishName?: string;
  level: string; // e.g., "1/4", "1/3", "1/2", "1"
  levelValue: number; // e.g., 0.25, 0.33, 0.5, 1.0
  size: "Pequeño" | "Mediano" | "Grande" | "Enorme" | "Gargantuesco";
  sizeEnglish: "Small" | "Medium" | "Large" | "Huge" | "Gargantuan";
  hp: number | string; // e.g. 12, or "Regla de Minion" / "-"
  hpMax?: number;
  speed: string; // e.g. "6" or "Fly 12"
  armor: ArmorType;
  challengeRating: string; // e.g. "1/8", "1/4", "1/2"
  type: MonsterType;
  abilities: MonsterAbility[];
  attacks: MonsterAction[];
  notes?: string[];
  loot?: string[];
  group: string; // e.g. "Kobolds"
  groupDescription?: string;
  groupTrait?: MonsterAbility;
}

export interface Hero {
  id: string;
  name: string;
  level: number;
}
