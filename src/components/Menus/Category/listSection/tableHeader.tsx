import styled from 'styled-components';
import { flex } from 'styles/flex';
import { font } from 'styles/fonts';
import CheckBox from 'components/common/Checkbox';

export default function TableHeader() {
  return (
    <Wrapper>
      <Item>
        <CheckBox header></CheckBox>
      </Item>
      <Item>카테고리명</Item>
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  ${flex('', 'center')};
  ${font(16, 600, 16)};
  position: sticky;
  z-index: 1;
  top: 0;
  width: 100%;
  padding: 17px 19px;
  background-color: #fcfcfc;
  color: #424242;
  border: 1px solid #f4f5f7;
`;

const Item = styled.li`
  ${flex('center', 'center')};
  position: relative;
`;
