import type { ReactNode } from 'react';
import { ContentWrapper, MainBackground } from './styled';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorBox } from '@components/ErrorBox';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => (
  <ErrorBoundary
    FallbackComponent={({ error }) => (
      <ErrorBox message={`Произошла ошибка: ${(error as Error).message}`} />
    )}
  >
    <MainBackground>
      <ContentWrapper>{children}</ContentWrapper>
    </MainBackground>
  </ErrorBoundary>
);
