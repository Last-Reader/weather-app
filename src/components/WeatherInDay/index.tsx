import type { WeatherType } from "@src/types/types";
import { AdditionalFlexBlock, AdditionalIcon, AdditionalTitle, CurrentTemperature, DescriptionBlock, DescriptionIcon, DescriptionLabel, FeelsLikeLabel, FeelsLikeRow, FeelsLikeTemperature, GridAdditionalBlock, SunFlexBox, SunIcon, SunInfo, SunriseLabel, SunRiseTime, WeatherInDayBlock } from "./styled";
import sunrise from '@assets/sunrise-white.svg'
import sunset from '@assets/sunset-white.svg'
import humidityIcon from '@assets/humidity.svg'
import pressureIcon from '@assets/pressure.svg'
import windSpeedIcon from '@assets/wind.svg'
import uvIcon from '@assets/uv.svg'
import { iconFunction } from "@src/script/iconSwitch";

type Props = {
    weather: WeatherType;
}

type InfoItemProps = {
    id: string;
    icon: string;
    value: string | number;
    unit?: string;
    title: string;
}

function WeatherInDay ({weather}: Props) {
    const {temperature, feelsLike, sunRise, sunSet, humidity, pressure, windSpeed, uv, icon, description} = weather;

    const weatherDetails: InfoItemProps[] = [
        { id: 'humidity', icon: humidityIcon, value: humidity, unit: '%', title: 'Humidity' },
        { id: 'wind', icon: windSpeedIcon, value: windSpeed, unit: 'km/h', title: 'Wind Speed' },
        { id: 'pressure', icon: pressureIcon, value: pressure, unit: 'hPa', title: 'Pressure' },
        { id: 'uv', icon: uvIcon, value: uv, title: 'UV' }, 
];

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
                        <SunIcon src={sunrise} />
                        <SunInfo>
                            <SunriseLabel>Sunrise</SunriseLabel>
                            <SunRiseTime>{sunRise}</SunRiseTime>
                        </SunInfo>
                    </SunFlexBox>
                    <SunFlexBox>
                        <SunIcon src={sunset} />
                        <SunInfo>
                            <SunriseLabel>Sunset</SunriseLabel>
                            <SunRiseTime>{sunSet}</SunRiseTime>
                        </SunInfo>
                    </SunFlexBox>
                </CurrentTemperature>
                <DescriptionBlock>
                    <DescriptionIcon  src={iconFunction(icon)} />
                    <DescriptionLabel>{description}</DescriptionLabel>
                </DescriptionBlock>
                <GridAdditionalBlock>
                    {weatherDetails.map((item) => (
                        <AdditionalFlexBlock key={item.id}>
                            <AdditionalIcon src={item.icon} />
                            {item.value}{item.unit}
                            <AdditionalTitle>{item.title}</AdditionalTitle>
                        </AdditionalFlexBlock>
                    ))}
                </GridAdditionalBlock>
            </WeatherInDayBlock>
        </>
    )
}

export default WeatherInDay;