import { MAP_CONFIG } from "../../core/config/mapConfig.js";

export const LEVEL_ONE_ROUTE = [
  { x: 0, y: 720 },
  { x: 280, y: 600 },
  { x: 520, y: 420 },
  { x: 820, y: 260 },
  { x: 1280, y: 120 },
];

export function LevelOne(k, mapSprite = "Mapa-Level-1") {
  const { position, scale } = MAP_CONFIG;

  return k.add([
    k.sprite(mapSprite),
    k.pos(position.x, position.y),
    k.scale(scale),
    k.area(),
  ]);
}
