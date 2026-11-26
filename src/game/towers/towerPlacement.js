import { RAIO_ALCANCE } from "../../core/config/towerConfig.js";
import { posicaoBloqueada } from "./towerUtils.js";
import { colorTowerConfig } from "../../ui/colors/colorPalette.js";

function criarAlcance(k, posicao, opacidade) {
  return k.add([
    k.circle(RAIO_ALCANCE),
    k.pos(posicao),
    k.anchor("center"),
    k.color(colorTowerConfig(k, "alcance")),
    k.opacity(opacidade),
    k.z(9),
  ]);
}

export function posicionarTorres(k, mapa) {
  const estado = {
    selecionada: null,
    previa: null,
    alcancePrevia: null,
    posicoes: [],
  };

  const limparPrevia = () => {
    estado.previa?.destroy();
    estado.alcancePrevia?.destroy();
    estado.previa = null;
    estado.alcancePrevia = null;
  };

  const selecionarTorre = (sprite) => {
    estado.selecionada = sprite;
    limparPrevia();
    estado.previa = k.add([
      k.sprite(sprite),
      k.pos(k.mousePos()),
      k.scale(3),
      k.anchor("left"),
      k.color(colorTowerConfig(k, "normal")),
      k.opacity(0.6),
      k.z(99),
    ]);
    estado.alcancePrevia = criarAlcance(k, k.mousePos(), 0.2);

    estado.previa.onUpdate(() => {
      const posicao = k.mousePos();
      const bloqueada = posicaoBloqueada(posicao, estado.posicoes);
      estado.previa.pos = posicao;
      estado.alcancePrevia.pos = posicao;
      estado.previa.color = colorTowerConfig(
        k,
        bloqueada ? "bloqueada" : "normal",
      );
      estado.alcancePrevia.color = colorTowerConfig(
        k,
        bloqueada ? "bloqueada" : "alcance",
      );
    });
  };

  mapa.onClick(() => {
    if (!estado.selecionada) return;

    const posicao = k.mousePos();
    if (posicaoBloqueada(posicao, estado.posicoes)) return;

    const alcance = criarAlcance(k, posicao, 0);
    const torre = k.add([
      k.sprite(estado.selecionada),
      k.pos(posicao),
      k.scale(4),
      k.anchor("center"),
      k.area(),
      k.z(10),
    ]);

    estado.posicoes.push({ x: posicao.x, y: posicao.y });
    torre.onHover(() => (alcance.opacity = 0.2));
    torre.onHoverEnd(() => (alcance.opacity = 0));
    estado.selecionada = null;
    limparPrevia();
  });

  return selecionarTorre;
}
