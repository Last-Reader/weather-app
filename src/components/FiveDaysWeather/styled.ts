import { breakpoints } from "@src/styles/breakpoints";
import styled from "styled-components";

export const FiveDayBlock = styled.div`
    padding: 20px 30px;
    color: ${({theme}) => theme.textColor};
    top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    height: auto; 
    width: 100%;
    position: relative;
    background-color: ${({theme}) => theme.blockBackground};
    border-radius: 30px;
    box-shadow: 12px 12px 32px ${({theme}) => theme.shadowColor};
    font-size: 20px;
    font-weight: 600;
    min-width: 0;
`
export const FiveDaysTitle = styled.p`
    font-size: 32px;
    font-weight: 700;
    text-align: center;
`
export const FiveDaysColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 12px;
`
export const DayOfFiveDays = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    justify-content: start;
    width: 100%;
    
    @media (max-width: ${breakpoints.tablet}){
        font-size: 16px; 
    }
`
export const TempOfDay = styled.p`
    font-size: 24px;
    font-weight: 600;
    white-space: nowrap;

    @media (max-width: ${breakpoints.tablet}){
        font-size: 20px; 
    }
`
export const DayIcon = styled.img`
    height: 40px;
    width: 40px;
    flex-shrink: 0;
`