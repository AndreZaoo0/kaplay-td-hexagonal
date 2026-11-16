export async function loadEnemyStats(code) {
  const response = await fetch(`/api/enemies/${encodeURIComponent(code)}`);

  if (!response.ok) {
    throw new Error(`Erro ao carregar inimigo: ${code}`);
  }

  return response.json();
}
