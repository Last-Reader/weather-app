import styled from "styled-components";

export const HourlyBlock = styled.div`
    top: 40px;
    padding: 13px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    height: 366px;
    position: relative;
    background-color: ${({theme}) => theme.blockBackground};
    color: ${({theme}) => theme.textColor};
    font-size: 32px;
    font-weight: 700;
    border-radius: 30px;
    box-shadow: 12px 12px 32px #00000080;
`
export const HourlyList = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`
export const WeatherOfHour = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 700;
    align-items: center;
    background: ${({theme}) => theme.hourBackgroundLight};
    color: ${({theme}) => theme.textColor};
    border-radius: 40px;
    padding: 15px 30px;

    &:nth-child(n + 4){
        background: ${({theme}) => theme.hourBackgroundNight};
    }
`
export const HourWeatherIcon = styled.img`
    height: 80px;
    width: 80px;
`
export const WindDirectionIcon = styled.img<{$direction: number}>`
    height: 55px;
    width: 55px;
    transform: rotate(${({$direction}) => $direction}deg);
`