import kaplay from "kaplay";
import { createBaseMap } from "./ui/maps/base.js";
import { mainMenu } from "./ui/menu/elements.js";
// import "kaplay/global"; // uncomment if you want to use without the k. prefix

const k = kaplay({
  width: 800,
  height: 600,
  backgroundColor: [0, 0, 0],
});

mainMenu(k);

k.scene("game", () => {
  createBaseMap(k);
});

k.go("main menu");
