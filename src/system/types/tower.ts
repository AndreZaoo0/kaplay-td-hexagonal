export type CurrentyTower = {
  readonly identifier: IndetifierTower;
  target: EnemyStats;
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

export interface EnemyStats {
  class: string;
  moveSpeed: number;
  hitDamage: number;
  hitBox: number;
  deadValue: number;
}

type AttackType = "standard" | "quicking" | "area" | "stun";
