import styled from 'styled-components';
import { BoxTypeProps } from '@src/types/theme';

interface InputWithIconsProps extends BoxTypeProps {
  id?: string;
  name?: string;
}

const InputWrapper = styled.input<InputWithIconsProps>`
  width: ${({ theme, width }) => theme.box.width[width]};
  height: ${({ theme, height }) => theme.box.height[height]};
  padding: 8px;
  border: ${({ theme }) => `1px solid ${theme.color.border}`};
  border-radius: 8px;
  background-image: url('/icons/search_icon.svg');
  background-repeat: no-repeat;
  background-size: 18px;
  background-position: 97% 50%;
  &:focus {
    border: ${({ theme }) => `1px solid ${theme.color.blue}`};
  }
`;

export default function InputWithIcons(props: InputWithIconsProps) {
  const { width = 'lg', height = 'md', id, name } = props;
  return <InputWrapper width={width} height={height} placeholder="리나" type="text" id={id} name={name} />;
}
