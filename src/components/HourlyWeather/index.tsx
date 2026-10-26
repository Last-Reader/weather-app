import type { HourlyForecastItem } from '@src/types/types';
import {
  HourlyBlock,
  HourlyList,
  HourWeatherIcon,
  WeatherOfHour,
  WindDirectionIcon,
} from './styled';
import { iconFunction } from '@src/script/iconSwitch';
import navigationIcon from '@assets/navigation.svg';

type Props = {
  hourly: HourlyForecastItem[];
};

function HourlyWeather({ hourly }: Props) {
  return (
    <HourlyBlock>
      Hourly Forecast:
      <HourlyList>
        {hourly.map((hour: HourlyForecastItem) => (
          <WeatherOfHour key={hour.time}>
            {hour.time}
            <HourWeatherIcon src={iconFunction(hour.icon)} />
            {hour.temperature}°C
            <WindDirectionIcon src={navigationIcon} $direction={hour.direction} />
            {hour.windSpeed}km/h
          </WeatherOfHour>
        ))}
      </HourlyList>
    </HourlyBlock>
  );
}

export default HourlyWeather;
