import styled from 'styled-components';
import { BoxTypeProps } from '@src/types/theme';

interface InputProps extends BoxTypeProps {
  id?: string;
  name?: string;
}

const InputWrapper = styled.input<InputProps>`
  width: ${({ theme, width }) => theme.box.width[width]};
  height: ${({ theme, height }) => theme.box.height[height]};
  padding: 8px;
  border: ${({ theme }) => `1px solid ${theme.color.border}`};
  border-radius: 8px;
  &:focus {
    border: ${({ theme }) => `1px solid ${theme.color.blue}`};
  }
`;

export default function Input(props: InputProps) {
  const { width = 'lg', height = 'md', id, name } = props;
  return <InputWrapper width={width} height={height} placeholder="리나" type="text" id={id} name={name} />;
}
