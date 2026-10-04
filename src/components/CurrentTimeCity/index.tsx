import { CityTitle, DateTitle, TimeBlock, WatchTitle } from "./styled";

type Props = {
    city: string,
    time: string,
    date: string,
}

function CurrentTimeCity ({city, time, date}: Props) {
    return (
        <TimeBlock>
            <CityTitle>{city}</CityTitle>
            <WatchTitle>{time}</WatchTitle>
            <DateTitle>{date}</DateTitle>
        </TimeBlock>
    )
    
}

export default CurrentTimeCity;