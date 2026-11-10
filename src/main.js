import kaplay from "kaplay";
import { mapSprite } from "./ui/maps/base.js";
import { mainMenu } from "./ui/menu/mainMenu.js";
import { createTowerSelectionHUD } from "./ui/hud/towers/selection.js";
import { createCircleEnemy } from "./ui/enemies/circle.js";
// import "kaplay/global"; // uncomment if you want to use without the k. prefix

const k = kaplay({
  width: 800,
  height: 600,
  backgroundColor: [0, 0, 0],
});

k.loadSprite("Inimigo-Comum-Circle", "sprites/Inimigo-Comum-Circle.png");
k.loadSprite("Mapa-Level-1", "sprites/Mapa-Level-1.png");
k.loadSprite("tower-basic", "sprites/Torre-Basica.png");

mainMenu(k);

k.scene("game", () => {
  mapSprite(k, "Mapa-Level-1", 0, 0);
  createTowerSelectionHUD(k);
  createCircleEnemy(k, 100, 100);
});

k.go("main menu");
