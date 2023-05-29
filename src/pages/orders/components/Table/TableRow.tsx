import { useRouter } from 'next/router';
import { useMemo, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import dayjs from 'dayjs';

import { flex } from 'styles/flex';
import { font } from 'styles/fonts';

import { ORDER_ROW_LIST } from 'pages/orders/constant';
import CheckBox from 'pages/components/Checkbox';



const TODAY = dayjs();

function TableRow() {
  const [orderList, setOrderList] = useState([]);
  const inifiniteScrollTarget = useRef();

  return (
    <Wrapper>
      {!ORDER_ROW_LIST.length ? (
        <Message>주문이 없습니다.</Message>
      ) :( 
        ORDER_ROW_LIST.map(({time,recipientId,menuId,category,personalCup,request},idx) => (
          <Row key={`row-item-${idx}`}>
          <CheckBox/>
          <Item>{time}</Item>
          <Item>{recipientId}</Item>
          <Item>{menuId}</Item>
          <Item>{category}</Item>
          <Item>{personalCup?  'O' : 'X'}</Item>
          <Item>{request}</Item>
          <Item>
            <CancelBtn>취소하기</CancelBtn>
          </Item>
          <Item>
            <ConfirmBtn>호출하기</ConfirmBtn>
          </Item>
        </Row>
      )))}
      {/* <InfiniteScrollTarget ref={InfiniteScrollTarget} /> */}
    </Wrapper>
  );
}

export default TableRow;

const Wrapper = styled.div`
  overflow-y: scroll;
  height: 200px;

  ::-webkit-scrollbar {
    width: 6px;
    height: 33px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c0c0c0;
    border-radius: 50px;
  }

  ::-webkit-scrollbar-track {
    background-color: #fff;
  }
`;

const Item = styled.li`
  ${flex('center', 'center')};
  padding: 13px 8px;
  gap: 4px;
`;

const ColoredItem = styled(Item)<{ item: string }>`
  ${({ item }) =>
    item === '긴급' &&
    css`
      color: #ea3313;
      font-weight: 700;
    `};

  ${({ item }) =>
    item === '노출 대기' &&
    css`
      color: #ff9900;
      font-weight: 700;
    `}
`;

const Row = styled.ul`
  ${flex('', 'center')};
  ${font(12, 400, 24)};
  padding: 0 10px 0 32px;


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

const Message = styled.div`
  ${font(16, 400, 21)};
  ${flex('center', 'center')};
  margin-top: 50px;
`;

const InfiniteScrollTarget = styled.div`
  height: 2px;
`;

const CancelBtn = styled.button`
  $font(12, 600, 16);
  padding: 7px 10px;
  border-radius: 5px;
  background-color :#FF6A6A;
  color: white;
`;

const ConfirmBtn = styled(CancelBtn)`
background-color: #1582FF;
`;