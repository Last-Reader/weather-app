import styled, { keyframes } from 'styled-components';

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
  border: 5px solid ${({ theme }) => theme.blockBackground};
  border-top-color: ${({ theme }) => theme.backgroundCurrentLocation};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
