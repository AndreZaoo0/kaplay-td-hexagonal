export type CurrentyTower = {
  readonly identifier: IndetifierTower;
  target: EnemiesTower;
  level: number;
  upgradeCost: number;
  sellValue: number;
  isActive: boolean;
};

export interface IndetifierTower {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly cost: number;
}

export interface EnemiesTower {
  EnemyType: EnemyType;
  moveSpeed: number;
  hitDamage: number;
  hitBox: number;
  deadValue: number;
}

type AttackType = "standard" | "quicking" | "area" | "stun";
type EnemyType = "standard" | "elite" | "boss";
