import type { ReactNode } from 'react';
import { MainBackground } from './styled';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => (
  <MainBackground>{children}</MainBackground>
);