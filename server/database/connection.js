import { Database } from "bun:sqlite";
import { fileURLToPath } from "node:url";

export const db = new Database(
  fileURLToPath(new URL("../storage/game.sqlite", import.meta.url)),
);
