import styled from "styled-components";

export const WeatherInDayBlock = styled.span`
    top: 40px;
    padding: 15px 24px;
    display: flex;
    flex-direction: row;
    height: 330px;
    position: relative;
    background-color: #444444;
    border-radius: 30px;
    box-shadow: 12px 12px 32px rgba(0, 0, 0, 0.5);
`
export const CurrentTemperature = styled.p`
    display: flex;
    flex-direction: column;
    font-family: Poppins;
    font-size: 80px;
    font-weight: 700;
    background: linear-gradient(80deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
export const FeelsLikeLabel = styled.p`
    color: #999;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 600;
`
export const FeelsLikeTemperature = styled.p`
    font-family: Poppins;
    font-size: 32px;
    font-weight: 700;
    color: #999;
`
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
`
export const SunFlexBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: last baseline;
    gap: 10px;
    padding-bottom: 25px;
    padding-top: 8px;
    padding-left: 8px;
`
export const SunInfo = styled.div`
    background: none;
    -webkit-background-clip: initial;
    background-clip: initial;
    -webkit-text-fill-color: initial;
    display: flex;
    font-weight: 600;
    flex-direction: column;
    color: #fff;
`
export const SunriseLabel = styled.p`
    font-size: 20px;
`
export const SunRiseTime = styled.p`
    font-size: 16px;
`
export const DescriptionBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -20px;
    align-items: center;
`
export const DescriptionLabel = styled.p`
    font-size: 32px;
    font-weight: 600;
    color: #fff;
    margin-top: -20px;
`
export const AdditionalInfoBlockLeft = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    align-items: center;
    justify-content: center;
    padding-left: 20px;
    padding-top: 20px;
`
export const AdditionalTitle = styled.p`
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 10px;
    padding-top: 10px;
`
export const AdditionalInfoBlockRight = styled.div`
    gap: 1px;
    padding-left: 70px;
    padding-top: 15px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    align-items: center;
`
export const AdditionalIcon = styled.img`
    padding-bottom: 15px;
`