import type { DailyForecastItem } from "@myTypes/types";
import { DayIcon, DayOfFiveDays, FiveDayBlock, FiveDaysColumn, FiveDaysTitle, TempOfDay } from "./styled";
import sunny from '@assets/clear.svg'
import clouds from '@assets/clouds.svg'
import rain from '@assets/rain.svg'

type Props = {
    daily: DailyForecastItem[],
}

function dailyIcon(str: string): string {
    let icon;
    switch(str){
        case 'sun':
            icon = sunny;
            break;
        case 'rain':
            icon = rain;
            break;
        case 'cloudy':
            icon = clouds;
            break;
        default:
            icon = clouds;
    }
    return icon;
}

function FiveDayWeather({daily}: Props) {
    return(
        <FiveDayBlock>
            <FiveDaysTitle>5 Days Forecast:</FiveDaysTitle>
                <FiveDaysColumn>
                    {daily.map((day) => (
                        <DayOfFiveDays>
                            <DayIcon src={dailyIcon(day.icon)} />
                            <TempOfDay>{day.temperature}°C</TempOfDay>
                            {day.dayName}, {day.date}
                        </DayOfFiveDays>
                    ))}
                </FiveDaysColumn>
        </FiveDayBlock>
    )
}

export default FiveDayWeather;