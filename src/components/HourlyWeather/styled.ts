import { breakpoints } from "@src/styles/breakpoints";
import styled from "styled-components";

export const HourlyBlock = styled.div`
    top: 40px;
    padding: 13px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    height: 378px;
    position: relative;
    background-color: ${({theme}) => theme.blockBackground};
    color: ${({theme}) => theme.textColor};
    font-size: 32px;
    font-weight: 700;
    border-radius: 30px;
    box-shadow: 12px 12px 32px ${({theme}) => theme.shadowColor};
    min-width: 0;
    overflow: hidden;

    @media (max-width: ${breakpoints.tablet}){
        height: auto;
        padding: 15px 20px;
    }

    @media(max-width: ${breakpoints.mobile}){
        height: auto;
        padding: 15px 20px;
        gap: 15px;
        text-align: center;
    }
`
export const HourlyList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 20px;
    width: 100%;

    @media (max-width: ${breakpoints.tablet}){
        overflow-x: auto;
        overflow-y: hidden;
        padding-bottom: 10px;
        justify-content: flex-start;
        
        &::-webkit-scrollbar { display: none; }
        scrollbar-width: none;
    }

    @media(max-width: ${breakpoints.mobile}){
        overflow-x: auto;
        overflow-y: hidden;
        padding-bottom: 5px;
        
        &::-webkit-scrollbar { display: none; }
        scrollbar-width: none;
    }
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
    flex-shrink: 0;

    &:nth-child(n + 4){
        background: ${({theme}) => theme.hourBackgroundNight};
    }

    @media(max-width: ${breakpoints.mobile}){
        padding: 10px 15px;
        font-size: 16px;
    }
`

export const HourWeatherIcon = styled.img`
    height: 80px;
    width: 80px;

    @media(max-width: ${breakpoints.mobile}){
        height: 50px;
        width: 50px;
    }
`

export const WindDirectionIcon = styled.img<{$direction: number}>`
    height: 55px;
    width: 55px;
    transform: rotate(${({$direction}) => $direction}deg);

    @media(max-width: ${breakpoints.mobile}){
        height: 35px;
        width: 35px;
    }
`