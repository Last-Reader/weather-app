import type { GeoData, GeoDataResult } from '@myTypes/types';
import { fetchURL } from '@src/script/fetch';

const BASE_URL = 'https://geocoding-api.open-meteo.com/v1/search';

export async function geocoding(city: string): Promise<GeoData | null> {
  if (!city.trim()) return null;

  const url = new URL(BASE_URL);
  url.searchParams.set('name', city);
  url.searchParams.set('count', '1');
  url.searchParams.set('language', 'ru');

  const data = await fetchURL<GeoDataResult>(url);

  return data.results?.[0] ?? null;
}
