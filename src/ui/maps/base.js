// Geometria pura, sem dependência do Kaplay.
function createHexGrid({ rows, cols, radius, originX = 0, originY = 0 }) {
  const width = Math.sqrt(3) * radius;
  const height = 2 * radius;

  const vertices = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 180) * (60 * i - 30);
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  });

  const cells = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      cells.push({
        row,
        col,
        center: {
          x: originX + (col + (row % 2) * 0.5) * width,
          y: originY + row * height * 0.75,
        },
        vertices,
      });
    }
  }

  return cells;
}

// Renderização separada, usando Kaplay.
function renderHexGrid(k, cells) {
  for (const cell of cells) {
    const shape = cell.vertices.map(({ x, y }) => k.vec2(x, y));

    k.add([
      k.polygon(shape),
      k.pos(cell.center.x, cell.center.y),
      k.color(50, 150, 50),
      k.outline(2, k.rgb(255, 255, 255)),
      k.area({ shape: new k.Polygon(shape) }),
      k.anchor("center"),
      "hex",
      { gridX: cell.col, gridY: cell.row },
    ]);
  }
}
export function createBaseMap(k, options) {
  const cells = createHexGrid({
    rows: 8,
    cols: 10,
    radius: 32,
    originX: 100,
    originY: 100,
  });

  renderHexGrid(k, cells);
}
