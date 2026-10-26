import type { ReactNode } from 'react';
import { ContentWrapper, MainBackground } from './styled';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => (
  <MainBackground>
    <ContentWrapper>
      {children}
    </ContentWrapper>
  </MainBackground>
);