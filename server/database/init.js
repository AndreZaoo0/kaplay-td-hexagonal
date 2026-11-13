import { db } from "./connection.js";

db.run(`
  CREATE TABLE IF NOT EXISTS enemy_templates (
    code TEXT PRIMARY KEY,
    enemy_class TEXT NOT NULL,
    move_speed REAL NOT NULL,
    hit_damage INTEGER NOT NULL,
    hit_box REAL NOT NULL,
    dead_value INTEGER NOT NULL,
    sprite_key TEXT NOT NULL
  );
`);

db.query(
  `
  INSERT INTO enemy_templates (
    code,
    enemy_class,
    move_speed,
    hit_damage,
    hit_box,
    dead_value,
    sprite_key
  )
  VALUES (?, ?, ?, ?, ?, ?, ?)
  ON CONFLICT(code) DO UPDATE SET
    enemy_class = excluded.enemy_class,
    move_speed = excluded.move_speed,
    hit_damage = excluded.hit_damage,
    hit_box = excluded.hit_box,
    dead_value = excluded.dead_value,
    sprite_key = excluded.sprite_key
`,
).run("circle", "standard", 12, 2, 1, 5, "Inimigo-Comum-Circle");
