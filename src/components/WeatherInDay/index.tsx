import type { WeatherType } from "@src/types/types";
import { AdditionalIcon, AdditionalInfoBlockLeft, AdditionalInfoBlockRight, AdditionalTitle, CurrentTemperature, DescriptionBlock, DescriptionLabel, FeelsLikeLabel, FeelsLikeRow, FeelsLikeTemperature, SunFlexBox, SunInfo, SunriseLabel, SunRiseTime, WeatherInDayBlock } from "./styled";
import sunriseWhite from '@assets/sunrise-white.svg'
import sunsetwhite from '@assets/sunset-white.svg'
import humidityIcon from '@assets/humidity.svg'
import pressureIcon from '@assets/pressure.svg'
import windSpeedIcon from '@assets/wind.svg'
import uvIcon from '@assets/uv.svg'
import { iconFunction } from "@src/script/iconSwitch";

type Props = {
    weather: WeatherType;
}

function WeatherInDay ({weather}: Props) {
    const {temperature, feelsLike, sunRise, sunSet, humidity, pressure, windSpeed, windDirection, icon, description} = weather;

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
                    <img height='90%' width='90%' src={iconFunction(icon)} />
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