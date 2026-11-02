export function createBaseMap(k) {
  const {
    vec2,
    polygon,
    pos,
    color,
    outline,
    area,
    anchor,
    add,
    rgb,
    onClick,
    Polygon,
  } = k;

  const RADIUS = 32;
  const MAP_COLS = 10;
  const MAP_ROWS = 8;

  const START_X = 100;
  const START_Y = 100;

  const HEX_WIDTH = Math.sqrt(3) * RADIUS;
  const HEX_HEIGHT = 2 * RADIUS;

  function getHexVertices(radius) {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 180) * (60 * i - 30);
      points.push(vec2(Math.cos(angle) * radius, Math.sin(angle) * radius));
    }
    return points;
  }

  const hexShape = getHexVertices(RADIUS);

  for (let r = 0; r < MAP_ROWS; r++) {
    for (let c = 0; c < MAP_COLS; c++) {
      const posX = (c + (r % 2) * 0.5) * HEX_WIDTH;
      const posY = r * (HEX_HEIGHT * 0.75);

      add([
        polygon(hexShape),
        pos(START_X + posX, START_Y + posY),
        color(50, 150, 50),
        outline(2, rgb(255, 255, 255)),
        area({ shape: new Polygon(hexShape) }),
        anchor("center"),
        "hex",
        { gridX: c, gridY: r },
      ]);
    }
  }

  onClick("hex", (hex) => {
    hex.color = rgb(200, 50, 50);
  });
}
