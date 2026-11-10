export function createCircleEnemy(k, x, y) {
  return k.add([
    k.sprite("Inimigo-Comum-Circle"),
    k.pos(x, y),
    k.scale(1),
    k.anchor("center"),
    k.area(),
  ]);
}

export const circulo = {
  EnemyType: "standard",
  moveSpeed: 50,
  hitDamage: 10,
  hitBox: 20,
  deadValue: 50,
  create: (k, x, y) => createCircleEnemy(k, x, y),
};
