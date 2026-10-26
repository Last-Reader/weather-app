import { breakpoints } from '@src/styles/breakpoints';
import styled from 'styled-components';

export const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: stretch;
    gap: 15px;
  }
`;
export const LabelSwitch = styled.label`
  position: relative;
  width: 110px;
  display: block;
  cursor: pointer;
`;
export const SwitchInput = styled.input`
  opacity: 0;
  position: absolute;
  width: 0;
  height: 0;
`;
export const Trace = styled.span<{ $checked: boolean }>`
  width: 100%;
  height: 38px;
  border-radius: 40px;
  position: relative;
  display: block;
  background-color: ${({ theme }) => theme.traceBackground};
  transition: background-color 0.2s ease;
  border: 1px solid ${({ theme }) => theme.borderColor};
  padding-right: 110px;
`;
export const Toggle = styled.span<{ $checked: boolean }>`
  left: 4px;
  position: absolute;
  top: 4px;
  border-radius: 50%;
  background-color: #111111;
  width: 30px;
  height: 30px;
  transform: translateX(${({ $checked }) => ($checked ? '0' : '70px')});
  transition: transform 0.2s ease;
`;
export const LabelText = styled.span`
  display: block;
  color: ${({ theme }) => theme.textColor};
  user-select: none;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 800;
`;
export const TopInput = styled.input`
  background-color: ${({ theme }) => theme.blockBackground};
  position: relative;
  width: 100%;
  height: 62px;
  border-radius: 40px;
  border: none;
  outline: none;
  padding-left: 70px;
  color: ${({ theme }) => theme.textColor};
  font-family: Poppins;
  font-size: 18px;
  box-shadow: 0 0 12px ${({ theme }) => theme.shadowColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
`;
export const SearchIcon = styled.img`
  position: absolute;
  top: 12px;
  left: 20px;
  opacity: 0.8;
  width: 40px;
  height: 40px;
  z-index: 5;
  pointer-events: none;
`;
export const SearchBox = styled.div`
  position: relative;
  max-width: 803px;
  width: 100%;
  height: 62px;
  max-width: 90%;

  @media (max-width: ${breakpoints.tablet}) {
    flex: 1;
    max-width: 100%;
    min-width: 200px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    order: 0;
  }
`;
export const CurrentLocation = styled.span`
  background-color: ${({ theme }) => theme.backgroundCurrentLocation};
  border-radius: 40px;
  position: relative;
  width: 292px;
  height: 62px;
  display: flex;
  align-items: center;
  padding: 20px;
  color: ${({ theme }) => theme.currentLocationColor};
  font-family: Poppins;
  font-size: 22px;
  font-weight: 800;
  gap: 20px;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    justify-content: center;
  }
`;
export const LocationImg = styled.img`
  width: 35px;
  height: 35px;
`;
