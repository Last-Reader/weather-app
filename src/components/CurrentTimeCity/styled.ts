import { breakpoints } from "@src/styles/breakpoints";
import styled from "styled-components";

export const TimeBlock = styled.span`
    top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
    height: 330px;
    position: relative;
    background-color: ${({theme}) => theme.blockBackground};;
    border-radius: 30px;
    box-shadow: 12px 12px 32px ${({theme}) => theme.shadowColor};

    @media (max-width: ${breakpoints.tablet}){
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 40px;
        height: auto;
        min-height: 160px;
        padding: 20px;
    }

    @media (max-width: ${breakpoints.mobile}){
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 10px;
        padding: 15px;
    }
`
export const CityTitle = styled.div`
    margin-top: 33px;
    color: ${({theme}) => theme.textColor};
    font-family: Poppins;
    font-weight: 700;
    position: relative;
    font-size: 36px;

    @media (max-width: ${breakpoints.mobile}){
        font-size: 24px;
    }
`
export const WatchTitle = styled.div`
    margin-top: 30px;
    color: ${({theme}) => theme.textColor};
    font-family: Poppins;
    font-weight: 700;
    position: relative;
    font-size: 96px;

    @media (max-width: ${breakpoints.mobile}){
        font-size: 48px;
    }
`
export const DateTitle = styled.div`
    margin-top: -30px;
    color: ${({theme}) => theme.textColor};
    font-family: Poppins;
    position: relative;
    font-size: 20px;

    @media (max-width: ${breakpoints.tablet}){
        margin-top: 35px;
    }
`