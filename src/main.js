import kaplay from "kaplay";
import { mapOneSprite } from "./ui/maps/levelOne.js";
import { mainMenu } from "./ui/menu/mainMenu.js";
import { createTowerSelectionHUD } from "./ui/hud/selection.js";
import { assetsLoader } from "./system/loaders/spriteLoader.js";
import { loadEnemyStats } from "./system/loaders/enemyLoader.js";
import { EnemySpawning } from "./ui/maps/levelOne.js";
// import "kaplay/global"; // uncomment if you want to use without the k. prefix

const circleStats = await loadEnemyStats("circle");

const k = kaplay({
  width: 1280,
  height: 720,
  backgroundColor: [0, 0, 0],
});

assetsLoader(k);

k.scene("game", () => {
  mapOneSprite(k, "Mapa-Level-1", 0, 0, 3);
  createTowerSelectionHUD(k);
  EnemySpawning(k, circleStats);
});

mainMenu(k);
k.go("main menu");
