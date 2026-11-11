export function mapSprite(k, spriteName, x, y, scale = 1) {
  return k.add([k.sprite(spriteName), k.pos(x, y), k.scale(scale)]);
}

export const mapConfig = {
  mapWidth: 320,
  mapHeight: 180,
};
