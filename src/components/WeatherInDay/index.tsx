import type { WeatherType } from "@src/types/types";
import { CurrentTemperature, DescriptionBlock, DescriptionLabel, FeelsLikeLabel, FeelsLikeRow, FeelsLikeTemperature, SunFlexBox, SunInfo, SunriseLabel, SunRiseTime, WeatherInDayBlock } from "./styled";
import sunriseWhite from '@assets/sunrise-white.svg'
import sunsetwhite from '@assets/sunset-white.svg'
import sunny from '@assets/clear.svg'
import clouds from '@assets/clouds.svg'
import rain from '@assets/rain.svg'

type Props = {
    weather: WeatherType;
}

function getIconDescription(description: string): string {
  switch (description) {
    case 'Sunny': return sunny;
    case 'Cloudy': return clouds;
    case 'Rain': return rain;
    default: return rain;
  }
}

function WeatherInDay ({weather}: Props) {
    const {temperature, feelsLike, sunRise, sunSet, description} = weather;

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
                <DescriptionBlock>
                    <img src={getIconDescription(description)} />
                    <DescriptionLabel>{description}</DescriptionLabel>
                </DescriptionBlock>
            </WeatherInDayBlock>
        </>
    )
}

export default WeatherInDay;