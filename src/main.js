import kaplay from "kaplay";
import { LEVEL_ONE_ROUTE, LevelOne } from "./game/levels/levelOne.js";
import { mainMenu } from "./ui/menu/mainMenu.js";
import { createTowerSelectionHUD } from "./ui/hud/selection.js";
import { assetsLoader } from "./core/loaders/spriteLoader.js";
import { loadEnemyStats } from "./core/loaders/enemyLoader.js";
import { EnemySpawning } from "./game/enemies/enemyRoute.js";
// import "kaplay/global"; // uncomment if you want to use without the k. prefix

const circleStats = await loadEnemyStats("circle");

const k = kaplay({
  width: 1280,
  height: 720,
  backgroundColor: [0, 0, 0],
});

assetsLoader(k);

k.scene("game", () => {
  LevelOne(k);
  createTowerSelectionHUD(k);
  EnemySpawning(k, circleStats, LEVEL_ONE_ROUTE);
});

mainMenu(k);
k.go("main menu");
