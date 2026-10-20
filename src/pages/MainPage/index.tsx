import TopBar from "@components/TopBar";
import WeatherGridBox from "@src/components/WeatherGridBox";
import { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { weatherMock } from "@src/mock/WeatherMocks";
import { geocoding } from "@src/api/geocoding";
import { weatherApi } from "@src/api/weatherApi";
import type { WeatherType } from "@myTypes/types";

type Props = {
  isDark: boolean;
  onToggle: (a: boolean) => void;
};

function MainPage ({isDark, onToggle}: Props) {

    const [location, setLocation] = useState('Витебск');

    const [weather, setWeather] = useState<WeatherType | null>(null);

    useEffect(() => {

      const loadData = async () => {

      try {
        const geoData = await geocoding(location);

        if (!geoData) {
          return;
        }

        const weatherData = await weatherApi(geoData);

        setWeather(weatherData);
      } catch (err) {
        console.error('ОШИБКА:', err);
      }
    };

      loadData();
      }, [location]);

      return(
        <>
            <TopBar isDark={isDark} onToggle={onToggle} setLocation={setLocation}/>
            {weather ? (
                <WeatherGridBox weather={weather} />
                ) : (
                <div>Загрузка...</div>
            )}
        </>
    )
}

export default MainPage;