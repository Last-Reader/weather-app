import styled from "styled-components";
import { breakpoints } from "@src/styles/breakpoints";

export const TopGridBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.53fr;
    height: auto;
    width: 100%;
    gap: 35px;

    @media (max-width: ${breakpoints.tablet}){
        grid-template-columns: 1fr; 
        gap: 20px;
    }

    @media (max-width: ${breakpoints.mobile}){
        grid-template-columns: minmax(0, 1fr);
    }
`
export const BottomGridBox = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 2.1fr);
    gap: 35px;
    margin-top: 40px;

    @media (max-width: ${breakpoints.tablet}){
        grid-template-columns: minmax(0, 1fr) minmax(0, 1.5fr);
        gap: 20px;
    }

    @media (max-width: ${breakpoints.mobile}){
        grid-template-columns: minmax(0, 1fr);
    }
`