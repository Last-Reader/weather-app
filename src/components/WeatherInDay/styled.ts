import { breakpoints } from '@src/styles/breakpoints';
import styled from 'styled-components';

export const WeatherInDayBlock = styled.div`
  top: 40px;
  padding: 15px 24px;
  display: flex;
  flex-direction: row;
  height: 330px;
  position: relative;
  background-color: ${({ theme }) => theme.blockBackground};
  border-radius: 30px;
  box-shadow: 12px 12px 32px ${({ theme }) => theme.shadowColor};
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    gap: 20px;
    height: auto;
    padding: 30px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 20px;
    gap: 20px;
  }
`;
export const CurrentTemperature = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Poppins;
  font-size: 80px;
  font-weight: 700;
  background: ${({ theme }) => theme.currentTemperatureText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${breakpoints.tablet}) {
    align-items: center;
    text-align: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    align-items: center;
    text-align: center;
  }
`;
export const FeelsLikeLabel = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-family: Poppins;
  font-size: 20px;
  font-weight: 600;
`;
export const FeelsLikeTemperature = styled.p`
  font-family: Poppins;
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.textColor};
`;
export const FeelsLikeRow = styled.div`
  background: none;
  -webkit-background-clip: initial;
  background-clip: initial;
  -webkit-text-fill-color: initial;
  margin-top: -30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
export const SunFlexBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: last baseline;
  gap: 10px;
  padding-bottom: 25px;
  padding-top: 8px;
  padding-left: 8px;
`;
export const SunInfo = styled.div`
  background: none;
  -webkit-background-clip: initial;
  background-clip: initial;
  -webkit-text-fill-color: initial;
  display: flex;
  font-weight: 600;
  flex-direction: column;
  color: ${({ theme }) => theme.textColor};
`;
export const SunriseLabel = styled.p`
  font-size: 20px;
`;
export const SunRiseTime = styled.p`
  font-size: 16px;
`;
export const SunIcon = styled.img`
  filter: ${({ theme }) => theme.iconFilter};
`;
export const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -20px;
  margin-left: -20px;
  align-items: center;
  padding-left: 15px;
  justify-content: center;

  @media (max-width: ${breakpoints.mobile}) {
    margin-left: 0;
  }
`;
export const DescriptionLabel = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.textColor};
  margin-top: -20px;
  text-align: center;
  max-width: 270px;
  min-width: 270px;
`;
export const DescriptionIcon = styled.img`
  height: 90%;
  width: 90%;
`;
export const GridAdditionalBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px 65px;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.textColor};
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-top: 10px;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 10px;
    padding-left: 10px;
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    width: 100%;
    justify-items: center;
  }
`;
export const AdditionalTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 10px;
  padding-top: 10px;
`;
export const AdditionalIcon = styled.img`
  width: 60px;
  height: 60px;
  filter: ${({ theme }) => theme.iconFilter};

  @media (max-width: ${breakpoints.tablet}) {
    width: 40px;
    height: 40px;
  }
`;
export const AdditionalFlexBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 10px;
`;
