import { circulo } from "./circle.js";

function spawnEnemy(k, stats, route) {
  const enemy = circulo.create(k, route[0].x, route[0].y, stats);
  let targetIndex = 1;

  enemy.onUpdate(() => {
    const offset = route[targetIndex].sub(enemy.pos);

    if (offset.len() >= 8) {
      const direction = offset.unit();
      enemy.move(
        direction.x * stats.moveSpeed,
        direction.y * stats.moveSpeed,
      );
      return;
    }

    if (targetIndex === route.length - 1) {
      enemy.destroy();
      return;
    }

    targetIndex += 1;
  });
}

export function EnemySpawning(k, stats, route) {
  if (!route || route.length < 2) {
    throw new Error("A rota do mapa deve conter ao menos dois pontos.");
  }

  const waypoints = route.map(({ x, y }) => k.vec2(x, y));
  return k.loop(2, () => spawnEnemy(k, stats, waypoints), 20, true);
}
