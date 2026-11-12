import kaplay from "kaplay";
import { mapSprite } from "./ui/maps/base.js";
import { mainMenu } from "./ui/menu/mainMenu.js";
import { createTowerSelectionHUD } from "./ui/hud/selection.js";
import { assetsLoader } from "./system/loaders/spriteLoader.js";
import { loadEnemyStats } from "./system/loaders/enemyLoader.js";
import { circulo } from "./ui/enemies/circle.js";
// import "kaplay/global"; // uncomment if you want to use without the k. prefix

const circleStats = await loadEnemyStats("circle");

const k = kaplay({
  width: 800,
  height: 600,
  backgroundColor: [0, 0, 0],
});

assetsLoader(k);

k.scene("game", () => {
  mapSprite(k, "Mapa-Level-1", 0, 0);
  createTowerSelectionHUD(k);
  circulo.create(k, 100, 100, circleStats);
});

mainMenu(k);
k.go("main menu");
