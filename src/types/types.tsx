export type Units = 'celsius' | 'fahrenheit';

// Один час в почасовом прогнозе
export interface HourlyForecastItem {
  time: string;
  temperature: number;
  icon: string;
  windSpeed: number;
  direction: number;
}

// Один день в прогнозе на дни
export interface DailyForecastItem {
  dayName: string;
  date: string;
  temperature: number;
  icon: string;
}

// Текущая погода + прогнозы
export interface WeatherType {
  country: string;
  city: string;
  date: string;           // "Thursday, 31 Aug"
  time: string;           // "09:03"
  icon: string;
  description: string;    // "Sunny"
  temperature: number;    // текущая
  feelsLike: number;      // ощущаемая
  maxTemperature: number;
  minTemperature: number;
  humidity: number;       // %
  windSpeed: number;      // км/ч
  windDirection: number;  // градусы 0-360
  sunRise: string;        // "06:37 AM"
  sunSet: string;         // "08:37 PM"
  pressure: number;       // hPa
  uv: number;             // 0-11
  hourly: HourlyForecastItem[];
  daily: DailyForecastItem[];
}

// Пропсы для MainPage (или App)
export interface Props {
  weatherProps: WeatherType;
}