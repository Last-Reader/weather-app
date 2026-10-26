import { normalizeWeather } from '@src/script/normalize';
import { fetchURL } from '@src/script/fetch';
import type { GeoData, RawWeatherResponse } from '@myTypes/types';

const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

export async function weatherApi(geoArray: GeoData) {
  const { latitude, longitude } = geoArray;

  const url = new URL(BASE_URL);

  url.searchParams.set('latitude', String(latitude));
  url.searchParams.set('longitude', String(longitude));

  url.searchParams.set(
    'current',
    'temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,wind_direction_10m,weather_code,surface_pressure'
  );
  url.searchParams.set('hourly', 'temperature_2m,wind_direction_10m,wind_speed_10m,weather_code');
  url.searchParams.set(
    'daily',
    'weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max'
  );

  url.searchParams.set('timezone', 'auto');
  url.searchParams.set('forecast_days', '5');

  const rawData = await fetchURL<RawWeatherResponse>(url);

  const weather = normalizeWeather(rawData, geoArray);

  return weather;
}
