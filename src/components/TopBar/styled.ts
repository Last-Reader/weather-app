import styled from "styled-components";

export const TopBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    width: 100%;
`
export const LabelSwitch = styled.label`
    position: relative;
    width: 100px;
    height: 38px;
    display: block;
    cursor: pointer;
`
export const SwitchInput = styled.input`
    opacity: 0;
    position: absolute;
    width: 0;
    height: 0;
`
export const Trace = styled.span<{ $checked: boolean }>`
    width: 100%;
    height: 100%;
    border-radius: 40px;
    position: relative;
    background-color: #D9D9D9;
    display: block;
    background-color: ${({ $checked }) => ($checked ? '#4ade80' : '#D9D9D9')};
    transition: background-color 0.2s ease;
`
export const Toggle = styled.span<{ $checked: boolean }>`
    left: 4px;
    position: absolute;
    top: 4px;
    border-radius: 50%;
    background-color: #111111;
    width: 30px;
    height: 30px;
    transform: translateX(${({ $checked }) => ($checked ? '0' : '60px')});
    transition: transform 0.2s ease;
`
export const LabelText = styled.span`
    display: block;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    user-select: none;
    font-family: Poppins;
    font-size: 18px;
    font-weight: extraBold;
`
export const TopInput = styled.input`
    background-color: #444444;
    position: relative;
    width: 800px;
    height: 62px;
    border-radius: 40px;
    border: none;
    outline: none;
    padding-left: 70px;
    color: #FFF9;
    font-family: Poppins;
    font-size: 18px;
`
export const SearchIcon = styled.img`
    position: absolute;
    top: 12px;
    left: 20px;
    opacity: 0.8;
    width: 40px;
    height: 40px;
    z-index: 5;
    pointer-events: none;
`
export const SearchBox = styled.div`
    position: relative;
    width: 803px;
    height: 62px;
`
export const CurrentLocation = styled.span`
    background-color: #4CBB17;
    border-radius: 40px;
    position: relative;
    width: 292px;
    height: 62px;
    display: block;
`