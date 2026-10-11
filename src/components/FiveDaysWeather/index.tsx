import type { DailyForecastItem } from "@myTypes/types";
import { DayIcon, DayOfFiveDays, FiveDayBlock, FiveDaysColumn, FiveDaysTitle, TempOfDay } from "./styled";
import { iconFunction } from "@src/script/iconSwitch";

type Props = {
    daily: DailyForecastItem[],
}

function FiveDayWeather({daily}: Props) {
    return(
        <FiveDayBlock>
            <FiveDaysTitle>5 Days Forecast:</FiveDaysTitle>
                <FiveDaysColumn>
                    {daily.map((day) => (
                        <DayOfFiveDays key={day.date}>
                            <DayIcon src={iconFunction(day.icon)} />
                            <TempOfDay>{day.temperature}°C</TempOfDay>
                            {day.dayName}, {day.date}
                        </DayOfFiveDays>
                    ))}
                </FiveDaysColumn>
        </FiveDayBlock>
    )
}

export default FiveDayWeather;