export async function fetchURL<T>(url: string | URL): Promise<T> {
  const responce = await fetch(url);
  if (!responce.ok) throw new Error(`Ошибка ${responce.status}`);
  return responce.json();
}
