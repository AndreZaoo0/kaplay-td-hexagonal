export function createTowerSelectionHUD(k) {
  const tower = k.add([
    k.sprite("tower-basic"),
    k.pos(40, 40),
    k.scale(2),
    k.anchor("center"),
    k.area(),
  ]);

  tower.onClick(() => {
    console.log("Tower selected!");
  });

  return tower;
}
