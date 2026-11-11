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
  INSERT OR IGNORE INTO enemy_templates (
    code,
    enemy_class,
    move_speed,
    hit_damage,
    hit_box,
    dead_value,
    sprite_key
  )
  VALUES (?, ?, ?, ?, ?, ?, ?)
`,
).run("circle", "standard", 2, 2, 1, 5, "Inimigo-Comum-Circle");
