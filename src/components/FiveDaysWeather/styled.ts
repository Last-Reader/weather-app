import { breakpoints } from "@src/styles/breakpoints";
import styled from "styled-components";

export const FiveDayBlock = styled.span`
    padding: 15px 30px;
    color: ${({theme}) => theme.textColor};;
    top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 366px;
    height: auto;
    width: 100%;
    position: relative;
    background-color: ${({theme}) => theme.blockBackground};;
    border-radius: 30px;
    box-shadow: 12px 12px 32px ${({theme}) => theme.shadowColor};
    font-size: 20px;
    font-weight: 600;
    min-width: 0;
`
export const FiveDaysTitle = styled.p`
    font-size: 32px;
    font-weight: 700;
    @media(max-width: ${breakpoints.mobile}){
        text-align: center;
    }
`
export const DayOfFiveDays = styled.div`
    display: flex;
    flex-direction: row;
    gap: 35px;
    align-items: center;
`
export const TempOfDay = styled.p`
    font-size: 24px;
    font-weight: 600;
`
export const FiveDaysColumn = styled.div`
    display: flex;
    flex-direction: column;
`
export const DayIcon = styled.img`
    height: 60px;
    width: 60px;
`