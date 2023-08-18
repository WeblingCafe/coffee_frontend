import styled from 'styled-components';

type FormErrorMessage = {
  children: React.ReactNode;
};

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.color.blue};
`;

export const FormErrorMessage = ({ children }: FormErrorMessage) => <ErrorMessage>{children}</ErrorMessage>;
