const KEY = "curriculos";

export function getCurriculos() {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export function saveCurriculo(curriculo: any) {
  const curriculos = getCurriculos();

  const novo = {
    ...curriculo,
    id: Date.now(), // ID simples
  };

  localStorage.setItem(KEY, JSON.stringify([...curriculos, novo]));
}