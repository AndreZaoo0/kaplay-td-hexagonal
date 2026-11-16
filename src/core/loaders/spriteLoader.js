import { GAME_SPRITES } from "../../data/spriteList.js";

export function assetsLoader(k) {
  Object.values(GAME_SPRITES)
    .flat()
    .forEach(({ name, path }) => {
      k.loadSprite(name, path);
    });
}
