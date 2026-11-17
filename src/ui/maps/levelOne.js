import { circulo } from "../enemies/circle.js";

export function mapOneSprite(k, spriteName, x, y, scale = 1) {
  return k.add([k.sprite(spriteName), k.pos(x, y), k.scale(scale)]);
}

function spawnEnemy(k, stats) {
  const pos = k.vec2(0, k.height());
  const enemy = circulo.create(k, pos.x, pos.y, stats);

  enemy.onUpdate(() => {
    const direction = k
      .vec2(k.width() / 2, k.height() / 2)
      .sub(enemy.pos)
      .unit();

    enemy.move(direction.x * stats.moveSpeed, direction.y * stats.moveSpeed);
  });
}

export function EnemySpawning(k, stats) {
  return k.loop(2, () => spawnEnemy(k, stats), 20, true);
}
