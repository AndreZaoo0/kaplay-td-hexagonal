import { MAP_CONFIG } from "../../core/config/mapConfig.js";

export const RAIO_ALCANCE = 4 * 16 * MAP_CONFIG.scale;
export const RAIO_BLOQUEIO = (16 * MAP_CONFIG.scale) / 2;
export const TORRES_HUD = [
  {
    sprite: "tower-basic",
    nome: "Torre Básica",
    descricao: "É apenas uma torre comum. Equilibrada em dano e velocidade.",
    x: 1080,
    y: 70,
  },
  {
    sprite: "tower-area",
    nome: "Torre de Explosão",
    descricao: "Atinge vários inimigos próximos, mas ataca mais lentamente.",
    x: 1080,
    y: 170,
  },
  {
    sprite: "tower-fast",
    nome: "Torre Rápida",
    descricao:
      "Ataca rapidamente, causando grandes danos, mas com alcance limitado.",
    x: 1080,
    y: 270,
  },
  {
    sprite: "tower-stun",
    nome: "Torre Atordoante",
    descricao: "Atordoa inimigos e reduz seu avanço. Causa quase nenhum dano.",
    x: 1080,
    y: 370,
  },
];
