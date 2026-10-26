import { breakpoints } from '@src/styles/breakpoints';
import styled from 'styled-components';

export const MainBackground = styled.div`
  min-height: 100vh;
  background-attachment: fixed;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 28px 20px 70px;
  }
`;
export const ContentWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  padding: 78px 63px 90px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 40px 20px 60px;
  }
`;
