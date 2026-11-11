import "./database/init.js";
import { getEnemyByCode } from "./repositories/enemyRepository.js";

const server = Bun.serve({
  port: 3001,

  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/api/health") {
      return Response.json({
        status: "ok",
        database: "connected",
      });
    }

    const match = url.pathname.match(/^\/api\/enemies\/([^/]+)$/);

    if (req.method === "GET" && match) {
      const code = decodeURIComponent(match[1]);
      const enemy = getEnemyByCode(code);

      if (!enemy) {
        return Response.json({ error: "Enemy not found" }, { status: 404 });
      }

      return Response.json(enemy);
    }

    return new Response("Not Found", {
      status: 404,
    });
  },
});

console.log(`API running at ${server.url}`);
