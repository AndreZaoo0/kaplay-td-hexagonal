import { MAP_CONFIG } from "../../core/config/mapConfig.js";

export const RAIO_ALCANCE = 4 * 16 * MAP_CONFIG.scale;
export const RAIO_BLOQUEIO = (16 * MAP_CONFIG.scale) / 2;
export const TORRES_HUD = [
  { sprite: "tower-basic", nome: "Básica", x: 1080, y: 70 },
  { sprite: "tower-area", nome: "Área", x: 1080, y: 170 },
  { sprite: "tower-fast", nome: "Rápida", x: 1080, y: 270 },
  { sprite: "tower-stun", nome: "Stun", x: 1080, y: 370 },
];
