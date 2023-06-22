import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { ORDER_HEADER_LIST } from 'pages/orders/constant';

import { flex } from 'styles/flex';
import { font } from 'styles/fonts';
import { fitImg } from 'styles/mixins';
import CheckBox from 'components/common/Checkbox';
import { useState } from 'react';

function TableHeader() {
  const [headerList, setHeaderList] = useState(ORDER_HEADER_LIST);

  const handleAllCheckBoxesClick = () => {};

  return (
    <Wrapper>
      <Item>
        <CheckBox header onClick={handleAllCheckBoxesClick}></CheckBox>
      </Item>
      {headerList.map((item, idx) => (
        <Item key={`header-item-${idx}`}>
          <span>{item.value}</span>
        </Item>
      ))}
    </Wrapper>
  );
}

export default TableHeader;

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

  li:nth-child(1) {
    flex: 1.5;
  }

  li:nth-child(2) {
    flex: 3;
  }

  li:nth-child(3) {
    flex: 3;
  }

  li:nth-child(4) {
    flex: 4;
  }

  li:nth-child(5) {
    flex: 3;
  }

  li:nth-child(6) {
    flex: 3;
  }

  li:nth-child(7) {
    flex: 6;
  }

  li:nth-child(8) {
    flex: 3;
  }

  li:nth-child(9) {
    flex: 3;
  }
`;

const Item = styled.li`
  ${flex('center', 'center')};
  position: relative;
`;
