import TopBar from '@components/TopBar';
import WeatherGridBox from '@src/components/WeatherGridBox';
import { useEffect, useState } from 'react';
import { geocoding } from '@src/api/geocoding';
import { weatherApi } from '@src/api/weatherApi';
import type { WeatherType } from '@myTypes/types';
import { Spinner } from '@components/Spinner';
import { ErrorBox } from '@src/components/ErrorBox';

type Props = {
  isDark: boolean;
  onToggle: (a: boolean) => void;
};

function MainPage({ isDark, onToggle }: Props) {
  const [location, setLocation] = useState('Витебск');
  const [weather, setWeather] = useState<WeatherType | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const geoData = await geocoding(location);
        if (!geoData) {
          throw new Error('Город не найден');
        }

        const weatherData = await weatherApi(geoData);
        setWeather(weatherData);
      } catch (err) {
        console.error('ОШИБКА:', err);
        setError('Не удалось загрузить данные. Попробуйте другой город.');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [location]);

  return (
    <>
      <TopBar isDark={isDark} onToggle={onToggle} setLocation={setLocation} />

      {isLoading && <Spinner />}

      {!isLoading && error && <ErrorBox message={error} />}

      {!isLoading && !error && weather && <WeatherGridBox weather={weather} />}
    </>
  );
}

export default MainPage;
