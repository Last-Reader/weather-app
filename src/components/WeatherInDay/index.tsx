import type { WeatherType } from "@src/types/types";
import { CurrentTemperature, FeelsLikeLabel, FeelsLikeRow, FeelsLikeTemperature, SunFlexBox, SunInfo, SunriseLabel, SunRiseTime, WeatherInDayBlock } from "./styled";
import sunriseWhite from '@assets/sunrise-white.svg'
import sunsetwhite from '@assets/sunset-white.svg'

type Props = {
    weather: WeatherType;
}

function WeatherInDay ({weather}: Props) {
    const {temperature, feelsLike, sunRise, sunSet} = weather;

    return(
        <>
            <WeatherInDayBlock>
                <CurrentTemperature>
                    {temperature}°C
                    <FeelsLikeRow>
                        <FeelsLikeLabel>Feels Like: </FeelsLikeLabel>
                        <FeelsLikeTemperature>{feelsLike}°C</FeelsLikeTemperature>
                    </FeelsLikeRow>
                    <SunFlexBox>
                        <img src={sunriseWhite} />
                        <SunInfo>
                            <SunriseLabel>Sunrise</SunriseLabel>
                            <SunRiseTime>{sunRise}</SunRiseTime>
                        </SunInfo>
                    </SunFlexBox>
                    <SunFlexBox>
                        <img src={sunsetwhite} />
                        <SunInfo>
                            <SunriseLabel>Sunset</SunriseLabel>
                            <SunRiseTime>{sunSet}</SunRiseTime>
                        </SunInfo>
                    </SunFlexBox>
                </CurrentTemperature>
            </WeatherInDayBlock>
        </>
    )
}

export default WeatherInDay;