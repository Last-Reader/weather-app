import type { GeoData } from '@myTypes/types';
import type {
  WeatherType,
  HourlyForecastItem,
  DailyForecastItem,
  RawWeatherResponse,
} from '@myTypes/types';

const WMO_CODE_MAP: Record<number, { description: string; icon: string }> = {
  0:  { description: 'Ясно',                  icon: 'sun' },
  1:  { description: 'Преимущественно ясно',  icon: 'sun' },

  2:  { description: 'Переменная облачность', icon: 'cloud' },
  3:  { description: 'Пасмурно',              icon: 'cloud' },
  45: { description: 'Туман',                 icon: 'cloud' },
  48: { description: 'Туман с изморозью',     icon: 'cloud' },

  51: { description: 'Лёгкая морось',         icon: 'rain' },
  53: { description: 'Умеренная морось',      icon: 'rain' },
  55: { description: 'Плотная морось',        icon: 'rain' },
  61: { description: 'Небольшой дождь',       icon: 'rain' },
  63: { description: 'Умеренный дождь',       icon: 'rain' },
  65: { description: 'Сильный дождь',         icon: 'rain' },
  80: { description: 'Ливень',                icon: 'rain' },
  81: { description: 'Сильный ливень',        icon: 'rain' },
  82: { description: 'Очень сильный ливень',  icon: 'rain' },
  95: { description: 'Гроза',                 icon: 'rain' },

  71: { description: 'Небольшой снег',        icon: 'snow' },
  73: { description: 'Умеренный снег',        icon: 'snow' },
  75: { description: 'Сильный снег',          icon: 'snow' },
  77: { description: 'Снежная крупа',         icon: 'snow' },
  85: { description: 'Снежный ливень',        icon: 'snow' },
  86: { description: 'Сильный снегопад',      icon: 'snow' },
};

const DEFAULT_CODE = { description: 'Неизвестно', icon: 'cloud' };

function getCodeInfo(code: number): { description: string; icon: string } {
  return WMO_CODE_MAP[code] ?? DEFAULT_CODE;
}

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

function formatDate(iso: string): { dayName: string; date: string } {
  const d = new Date(iso);
  return {
    dayName: d.toLocaleDateString('ru-RU', { weekday: 'long' }),
    date: d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' }),
  };
}

function normalizeHourly(raw: RawWeatherResponse): HourlyForecastItem[] {
  const result: HourlyForecastItem[] = [];
  const now = new Date();

  for (let i = 0; i < raw.hourly.time.length; i++) {
    const time = new Date(raw.hourly.time[i]);

    if (time >= now && result.length < 5) {
      result.push({
        time: formatTime(raw.hourly.time[i]),
        temperature: Math.round(raw.hourly.temperature_2m[i]),
        icon: getCodeInfo(raw.hourly.weather_code[i]).icon,
        windSpeed: Math.round(raw.hourly.wind_speed_10m[i]),
        direction: raw.hourly.wind_direction_10m[i],
      });
    }

    if (result.length === 5) break;
  }

  return result;
}

function normalizeDaily(raw: RawWeatherResponse): DailyForecastItem[] {
  const result: DailyForecastItem[] = [];

  for (let i = 0; i < 5; i++) {
    const { dayName, date } = formatDate(raw.daily.time[i]);

    result.push({
      dayName,
      date,
      temperature: Math.round(raw.daily.temperature_2m_max[i]),
      icon: getCodeInfo(raw.daily.weather_code[i]).icon,
    });
  }

  return result;
}

export function normalizeWeather(
  raw: RawWeatherResponse,
  geo: GeoData,
): WeatherType {
  const { dayName, date } = formatDate(raw.current.time);
  const currentCode = getCodeInfo(raw.current.weather_code);

  return {
    city: geo.name,
    country: geo.country,

    date: `${dayName}, ${date}`,
    time: formatTime(raw.current.time),

    icon: currentCode.icon,
    description: currentCode.description,

    temperature: Math.round(raw.current.temperature_2m),
    feelsLike: Math.round(raw.current.apparent_temperature),
    maxTemperature: Math.round(raw.daily.temperature_2m_max[0]),
    minTemperature: Math.round(raw.daily.temperature_2m_min[0]),

    humidity: raw.current.relative_humidity_2m,
    windSpeed: Math.round(raw.current.wind_speed_10m),
    windDirection: raw.current.wind_direction_10m,

    sunRise: formatTime(raw.daily.sunrise[0]),
    sunSet: formatTime(raw.daily.sunset[0]),

    pressure: Math.round(raw.current.surface_pressure),
    uv: Math.round(raw.daily.uv_index_max[0]),

    hourly: normalizeHourly(raw),
    daily: normalizeDaily(raw),
  };
}