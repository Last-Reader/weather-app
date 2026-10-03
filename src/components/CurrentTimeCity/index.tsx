import { CityTitle, TimeBlock } from "./styled";

type Props = {
    city: string,
}

function CurrentTimeCity ({city}: Props) {
    return (
        <TimeBlock>
            <CityTitle>{city}</CityTitle>
        </TimeBlock>
    )
    
}

export default CurrentTimeCity;