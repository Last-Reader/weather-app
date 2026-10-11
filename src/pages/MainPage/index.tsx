import TopBar from "@components/TopBar";
import WeatherGridBox from "@src/components/WeatherGridBox";
import { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { weatherMock } from "@src/mock/WeatherMocks";
import { geocoding } from "@src/api/geocoding";
import { weatherApi } from "@src/api/weatherApi";
import type { WeatherType } from "@myTypes/types";

function MainPage () {
    const[isDark, setIsDark] = useState(false);

    const [location, setLocation] = useState('Минск');

    const [weather, setWeather] = useState<WeatherType | null>(null);

    useEffect(() => {
        const loadData = async () => {
            const geoData = await geocoding(location);
            if (!geoData) return;

            const weatherData = await weatherApi(geoData);
            if(!weatherData) return;
            setWeather(weatherData);
        }
        loadData();
    }, [location]

    )

    return(
        <>
            <TopBar isDark={isDark} onToggle={setIsDark} setLocation={setLocation}/>
            {weather ? (
                <WeatherGridBox weather={weather} />
                ) : (
                <div>Загрузка...</div>
            )}
        </>
    )
}

export default MainPage;