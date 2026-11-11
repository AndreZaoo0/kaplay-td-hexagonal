import { db } from "../database/connection.js";

const findByCode = db.query(`
    SELECT
    code,
    enemy_class AS class,
    move_speed AS moveSpeed,
    hit_damage AS hitDamage,
    hit_box AS hitBox,
    dead_value AS deadValue,
    sprite_key AS spriteKey

    FROM enemy_templates
    WHERE code = ?
    `);

export function getEnemyByCode(code) {
  return findByCode.get(code) ?? null;
}
