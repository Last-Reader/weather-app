import styled, { keyframes } from 'styled-components';

// Создаем анимацию вращения на 360 градусов
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`;

export const SpinnerCircle = styled.div`
  width: 60px;
  height: 60px;
  border: 5px solid #fff3;
  border-top-color: #4CBB17;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;