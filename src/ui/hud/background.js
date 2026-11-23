export function createHud(k, spriteName, x, y, scale = 1) {
  return k.add([
    k.sprite(spriteName),
    k.pos(x, y),
    k.scale(scale),
    k.z(-10),
  ]);
}

export function createBorder(k, spriteName, x, y, scale = 1) {
  return k.add([
    k.sprite(spriteName),
    k.pos(x, y),
    k.scale(scale),
    k.z(100),
  ]);
}
