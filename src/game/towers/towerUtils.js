import { RAIO_BLOQUEIO } from "../../core/config/towerConfig.js";

export function posicaoBloqueada(posicao, posicoes) {
  return posicoes.some(
    (outra) =>
      Math.hypot(posicao.x - outra.x, posicao.y - outra.y) < RAIO_BLOQUEIO,
  );
}
