import { TORRES_HUD } from "../../core/config/towerConfig.js";
import { colorTextConfig } from "../colors/colorPalette.js";

export function exibirTorres(k, aoSelecionar, torres = TORRES_HUD) {
  let tituloDescricao;
  let textoDescricao;

  const limparDescricao = () => {
    tituloDescricao?.destroy();
    textoDescricao?.destroy();
    tituloDescricao = null;
    textoDescricao = null;
  };

  return torres.map(({ sprite, nome, descricao, x, y }) => {
    const item = k.add([
      k.sprite(sprite),
      k.pos(x, y),
      k.scale(5),
      k.area(),
      k.z(101),
    ]);

    item.onClick(() => aoSelecionar(sprite));
    item.onHover(() => {
      limparDescricao();

      tituloDescricao = k.add([
        k.text(nome, { size: 30 }),
        k.pos(50, 600),
        k.anchor("left"),
        k.color(colorTextConfig(k, "descrição")),
        k.z(101),
      ]);
      textoDescricao = k.add([
        k.text(descricao, { size: 30 }),
        k.pos(50, 625),
        k.anchor("left"),
        k.color(colorTextConfig(k, "descrição")),
        k.z(101),
      ]);
    });
    item.onHoverEnd(limparDescricao);
    k.add([
      k.text(nome, { size: 30 }),
      k.pos(x - 8, y + 70),
      k.anchor("left"),
      k.color(colorTextConfig(k, "descrição")),
      k.z(101),
    ]);
    return item;
  });
}
