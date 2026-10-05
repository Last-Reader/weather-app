import type { WeatherType } from "@src/types/types";
import { AdditionalIcon, AdditionalInfoBlockLeft, AdditionalInfoBlockRight, AdditionalTitle, CurrentTemperature, DescriptionBlock, DescriptionLabel, FeelsLikeLabel, FeelsLikeRow, FeelsLikeTemperature, SunFlexBox, SunInfo, SunriseLabel, SunRiseTime, WeatherInDayBlock } from "./styled";
import sunriseWhite from '@assets/sunrise-white.svg'
import sunsetwhite from '@assets/sunset-white.svg'
import sunny from '@assets/clear.svg'
import clouds from '@assets/clouds.svg'
import rain from '@assets/rain.svg'
import humidityIcon from '@assets/humidity.svg'
import pressureIcon from '@assets/pressure.svg'
import windSpeedIcon from '@assets/wind.svg'
import uvIcon from '@assets/uv.svg'

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
    const {temperature, feelsLike, sunRise, sunSet, description, humidity, pressure, windSpeed, windDirection} = weather;

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
                    <img height='90%' width='90%' src={getIconDescription(description)} />
                    <DescriptionLabel>{description}</DescriptionLabel>
                </DescriptionBlock>
                <AdditionalInfoBlockLeft>
                    <AdditionalIcon src={humidityIcon} />
                    {humidity}%
                    <AdditionalTitle>Humidity</AdditionalTitle>
                    <AdditionalIcon src={pressureIcon} />
                    {pressure}hPa
                    <AdditionalTitle>Pressure</AdditionalTitle>
                </AdditionalInfoBlockLeft>
                <AdditionalInfoBlockRight>
                    <AdditionalIcon src={windSpeedIcon} />
                    {windSpeed}km/h
                    <AdditionalTitle>Wind Speed</AdditionalTitle>
                    <AdditionalIcon src={uvIcon} />
                    {windDirection}
                    <AdditionalTitle>UV</AdditionalTitle>
                </AdditionalInfoBlockRight>
            </WeatherInDayBlock>
        </>
    )
}

export default WeatherInDay;