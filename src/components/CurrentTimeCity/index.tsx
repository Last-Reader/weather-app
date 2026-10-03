import { CityTitle, TimeBlock, WatchTitle } from "./styled";

type Props = {
    city: string,
    time: string,
}

function CurrentTimeCity ({city, time}: Props) {
    return (
        <TimeBlock>
            <CityTitle>{city}</CityTitle>
            <WatchTitle>{time}</WatchTitle>
        </TimeBlock>
    )
    
}

export default CurrentTimeCity;