import styled from "styled-components";

export const FiveDayBlock = styled.span`
    padding: 20px 30px;
    color: #fff;
    top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 366px;
    position: relative;
    background-color: #444444;
    border-radius: 30px;
    box-shadow: 12px 12px 32px rgba(0, 0, 0, 0.5);
    font-size: 20px;
    font-weight: 600;
`
export const FiveDaysTitle = styled.p`
    font-size: 32px;
    font-weight: 700;
`
export const DayOfFiveDays = styled.div`
    display: flex;
    flex-direction: row;
    gap: 45px;
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