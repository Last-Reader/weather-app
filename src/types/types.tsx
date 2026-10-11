export type Units = 'celsius' | 'fahrenheit';

export interface HourlyForecastItem {
  time: string;
  temperature: number;
  icon: string;
  windSpeed: number;
  direction: number;
}

export interface DailyForecastItem {
  dayName: string;
  date: string;
  temperature: number;
  icon: string;
}

export interface WeatherType {
  country: string;
  city: string;
  date: string;
  time: string;
  icon: string;
  description: string;
  temperature: number;
  feelsLike: number;
  maxTemperature: number;
  minTemperature: number;
  humidity: number;
  windSpeed: number;
  windDirection: number;
  sunRise: string;
  sunSet: string;
  pressure: number;
  uv: number;
  hourly: HourlyForecastItem[];
  daily: DailyForecastItem[];
}

export type RawWeatherResponse = {
  current: {
    time: string;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    weather_code: number;
    surface_pressure: number;
  };
    hourly: {
    time: string[];
    temperature_2m: number[];
    wind_direction_10m: number[];
    wind_speed_10m: number[];
    weather_code: number[];
};
    daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    sunrise: string[];
    sunset: string[];
    uv_index_max: number[];
    };
};

export type GeoData = {
    name: string;
    latitude: number;
    longitude: number;
    country: string;
}

export type GeoDataResult = {
    results?: GeoData[];
}