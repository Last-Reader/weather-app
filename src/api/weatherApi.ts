import type { GeoData } from "./geocoding";

const BASE_URL = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&hourly=temperature_2m,wind_direction_10m,wind_speed_10m,weather_code&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,wind_direction_10m,weather_code,surface_pressure&timezone=auto&forecast_days=5';
