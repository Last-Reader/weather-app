import type { WeatherType } from "@src/types/types";
import CurrentTimeCity from "@components/CurrentTimeCity";
import { FiveDayBlock } from "@components/FiveDaysWeather/styled";
import { HourlyBlock } from "@components/HourlyWeather/styled";
import WeatherInDay from "@components/WeatherInDay";
import { BottomGridBox, TopGridBox } from "./styled";

type Props = {
    weather: WeatherType,
}

function WeatherGridBox ({weather}: Props) {
    const {city, time, date} = weather;
    return (
    <>
        <TopGridBox>
            <CurrentTimeCity city={city} time={time} date={date}/>
            <WeatherInDay weather={weather}/>
        </TopGridBox>
        <BottomGridBox>
            <FiveDayBlock />
            <HourlyBlock />
        </BottomGridBox>
    </>
    )
}

export default WeatherGridBox;