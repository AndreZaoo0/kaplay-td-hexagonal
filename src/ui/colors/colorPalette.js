export function colorTowerConfig(k, colorName) {
  switch (colorName) {
    case "bloqueada":
      return k.rgb(255, 60, 60);
    case "alcance":
      return k.rgb(80, 170, 255);
    default:
      return k.rgb(255, 255, 255);
  }
}

export function colorTextConfig(k, colorName) {
  switch (colorName) {
    case "descrição":
      return k.rgb(255, 238, 0);
    case "main menu":
      return k.rgb(0, 217, 255);
    default:
      return k.rgb(255, 255, 255);
  }
}
