import styled from 'styled-components';
import ClosedContainer from '../DropdownList/ClosedContainer';
import DropDownList from '../DropdownList';
import { font } from '@styles/fonts';
import Table from '../Table';

export default function OrderList() {
  return (
    <Container>
      <DropDownList title="주문 내역 ☕️" count={10} initialValue={false}>
        <Table />
      </DropDownList>
      <ButtonsWrap>
        <CancelBtn disabled>취소</CancelBtn>
        <ConfirmBtn>호출</ConfirmBtn>
      </ButtonsWrap>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin-top: 16px;
`;

const ButtonsWrap = styled.div`
  position: absolute;
  right: 80px;
  top: 35px;
`;

const CancelBtn = styled.button`
  ${font(12, 600, 16)}
  padding: 6.6px 20px 7.4px;
  color: white;
  background-color: #ff6a6a;
  border-radius: 5px;
  margin-right: 8px;
  cursor: pointer;

  :disabled {
    background-color: #c9c9c9;
  }
`;

const ConfirmBtn = styled(CancelBtn)`
  ${font(12, 600, 16)}
  background-color: #1582FF;
`;
