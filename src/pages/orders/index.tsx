import { useRouter } from 'next/router';
import styled from 'styled-components';

import { font } from 'styles/fonts';
import { flex } from 'styles/flex';

import PickUpCompleteList from './components/PickUpCompleteList';
import OrderList from './components/OrderList';

export default function Order() {
  const router = useRouter();

  const handleChangeRouter = () => {
    router.push('/home');
  };

  return (
    <Container>
      <TabTitle>ORDER</TabTitle>
      <Divider />
      <OrderList />
      <PickUpCompleteList />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 0 83px;
  overflow: hidden;
`;

const TabTitle = styled.div`
  ${font(36, 700, 43.2)}
`;

const Divider = styled.div`
  margin: 38px 0 35px;
  background: rgba(0, 0, 0, 0.1);
  height: 1px;
`;
