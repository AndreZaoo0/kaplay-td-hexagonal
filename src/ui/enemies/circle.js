/** @type {import("../../types/enemies").EnemyStats} */
const enemyStats = {
  class: "standard",
  moveSpeed: 2,
  hitDamage: 2,
  hitBox: 1,
  deadValue: 5,
};

function createCircleEnemy(k, x, y) {
  return k.add([
    k.sprite("Inimigo-Comum-Circle"),
    k.pos(x, y),
    k.scale(1),
    k.anchor("center"),
    k.area(),
  ]);
}

export const circulo = {
  stats: enemyStats,
  create: (k, x, y) => createCircleEnemy(k, x, y),
};
