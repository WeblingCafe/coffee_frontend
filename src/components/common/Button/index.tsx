import styled from 'styled-components';
import { font } from 'styles/fonts';

interface ButtonProps {
  contents: string;
  backgroundColor?: string;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const { contents, backgroundColor, onClick } = props;
  return (
    <ButtonWrapper backgroundColor={backgroundColor} onClick={onClick}>
      {contents}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button<{ backgroundColor?: string }>`
  ${font(12, 600, 16)}
  padding: 6.6px 20px 7.4px;
  color: white;
  background-color: ${({ backgroundColor }) => backgroundColor || '#ff6a6a'};
  border-radius: 5px;
  margin-right: 8px;
  cursor: pointer;

  :disabled {
    background-color: #c9c9c9;
  }
`;
