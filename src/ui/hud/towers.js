import { MAP_CONFIG } from "../../core/config/mapConfig.js";
import { TORRES_HUD } from "../../core/config/towerConfig.js";

export function exibirTorres(k, aoSelecionar, torres = TORRES_HUD) {
  return torres.map(({ sprite, nome, x, y }) => {
    const item = k.add([
      k.sprite(sprite),
      k.pos(x, y),
      k.scale(MAP_CONFIG.scale),
      k.area(),
      k.z(101),
    ]);

    item.onClick(() => aoSelecionar(sprite));
    k.add([k.text(nome, { size: 16 }), k.pos(x - 8, y + 52), k.z(101)]);
    return item;
  });
}
