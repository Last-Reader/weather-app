import type { WeatherType } from "@src/types/types";
import CurrentTimeCity from "@components/CurrentTimeCity";
import WeatherInDay from "@components/WeatherInDay";
import { BottomGridBox, TopGridBox } from "./styled";
import FiveDayWeather from "@components/FiveDaysWeather";
import HourlyWeather from "@components/HourlyWeather";

type Props = {
    weather: WeatherType | null,
}

function WeatherGridBox ({weather}: Props) {
    if (!weather) return <div>Нет данных</div>;
    const {city, time, date, hourly} = weather;
    return (
    <>
        <TopGridBox>
            <CurrentTimeCity city={city} time={time} date={date}/>
            <WeatherInDay weather={weather}/>
        </TopGridBox>
        <BottomGridBox>
            <FiveDayWeather daily={weather.daily}/>
            <HourlyWeather hourly={hourly}/>
        </BottomGridBox>
    </>
    )
}

export default WeatherGridBox;