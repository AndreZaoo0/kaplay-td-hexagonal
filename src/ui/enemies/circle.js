/** *@param {import("../../types/enemies").EnemyStats} stats */

function createCircleEnemy(k, x, y, stats) {
  return k.add([
    k.sprite(stats.spriteKey),
    k.pos(x, y),
    k.scale(1),
    k.anchor("center"),
    k.area(),
  ]);
}

export const circulo = {
  create: (k, x, y, stats) => createCircleEnemy(k, x, y, stats),
};
