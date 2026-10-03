import CurrentTimeCity from "../CurrentTimeCity";
import { FiveDayBlock } from "../FiveDaysWeather/styled";
import { HourlyBlock } from "../HourlyWeather/styled";
import WeatherInDay from "../WeatherInDay";
import { BottomGridBox, TopGridBox } from "./styled";

function WeatherGridBox () {
    return (
    <>
        <TopGridBox>
            <CurrentTimeCity />
            <WeatherInDay />
        </TopGridBox>
        <BottomGridBox>
            <FiveDayBlock />
            <HourlyBlock />
        </BottomGridBox>
    </>
    )
}

export default WeatherGridBox;