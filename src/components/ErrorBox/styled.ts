import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 40px;
`;

export const ErrorCard = styled.div`
  background-color: ${({ theme }) => theme.blockBackground};
  border-left: 5px solid ${({ theme }) => theme.errorBorder};
  padding: 24px 32px;
  border-radius: 20px;
  box-shadow: 12px 12px 32px ${({ theme }) => theme.shadowColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 400px;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ErrorTitle = styled.h3`
  color: ${({ theme }) => theme.textColor};
  font-family: Poppins, sans-serif;
  font-size: 22px;
  font-weight: 700;
  margin: 0;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.textColor};
  opacity: 0.7;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  margin: 0;
`;
