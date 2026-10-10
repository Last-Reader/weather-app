import styled from "styled-components";

export const HourlyBlock = styled.span`
    top: 40px;
    padding: 13px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    height: 366px;
    position: relative;
    background-color: #444;
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    border-radius: 30px;
    box-shadow: 12px 12px 32px rgba(0, 0, 0, 0.5);
`
export const HourlyList = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`
export const WeatherOfHour = styled.span`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 700;
    align-items: center;
    background-color: #373636;
    color: #fff;
    border-radius: 40px;
    padding: 15px 30px;
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