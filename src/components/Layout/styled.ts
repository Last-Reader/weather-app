import styled from 'styled-components';

export const MainBackground = styled.div`
  min-height: 100vh;
  background-attachment: fixed;
  background-image: ${({theme}) => theme.mainBackground};
  padding: 78px 63px 90px;
`;