export async function getJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Erreur API");
  return res.json();
}
