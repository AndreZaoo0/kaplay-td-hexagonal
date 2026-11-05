export function mainMenu(k) {
  k.scene("main menu", () => {
    k.add([k.rect(k.width(), k.height()), k.pos(0, 0), k.color(20, 24, 35)]);

    k.add([
      k.text("TD Hexagonal", { size: 48 }),
      k.pos(k.width() / 2, k.height() / 2 - 60),
      k.anchor("center"),
    ]);

    const startText = k.add([
      k.text("Press SPACE or click to start", { size: 24 }),
      k.pos(k.width() / 2, k.height() / 2 + 20),
      k.anchor("center"),
      k.area(),
    ]);

    const startGame = () => k.go("game");
    startText.onClick(startGame);
    k.onKeyPress("space", startGame);
  });
}
