import kaplay from "kaplay";
import { LEVEL_ONE_ROUTE, LevelOne } from "./game/levels/levelOne.js";
import { mainMenu } from "./ui/menu/mainMenu.js";
import { assetsLoader } from "./core/loaders/spriteLoader.js";
import { loadEnemyStats } from "./core/loaders/enemyLoader.js";
import { EnemySpawning } from "./game/enemies/enemyRoute.js";
import { createHud, createBorder } from "./ui/hud/background.js";
// import "kaplay/global"; // uncomment if you want to use without the k. prefix

const circleStats = await loadEnemyStats("circle");

const k = kaplay({
  width: 1280,
  height: 720,
  backgroundColor: [0, 0, 0],
});

assetsLoader(k);

k.scene("game", () => {
  createBorder(k, "border-hud", 0, 0, 3.0);

  createHud(k, "background-hud", -12, -23.5, 3.0);
  LevelOne(k);
  EnemySpawning(k, circleStats, LEVEL_ONE_ROUTE);
});

mainMenu(k);
k.go("main menu");
