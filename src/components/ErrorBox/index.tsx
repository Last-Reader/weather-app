import { ErrorWrapper, ErrorCard, ErrorTitle, ErrorMessage } from './styled';

type Props = {
  message: string;
};

export const ErrorBox = ({ message }: Props) => {
  return (
    <ErrorWrapper>
      <ErrorCard>
        <ErrorTitle>Упс! Что-то пошло не так</ErrorTitle>
        <ErrorMessage>{message}</ErrorMessage>
      </ErrorCard>
    </ErrorWrapper>
  );
};
