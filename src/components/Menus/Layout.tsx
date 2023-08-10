import styled from 'styled-components';
import { font } from 'styles/fonts';

interface MenuLayoutProps {
  children: React.ReactNode;
}

const MenuLayout = ({ children }: MenuLayoutProps) => {
  return (
    <Container>
      <TabTitle>Menu</TabTitle>
      <Divider />
      <Box>{children}</Box>
    </Container>
  );
};

export default MenuLayout;

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

const Box = styled.div`
  border: 1px solid #eff0f6;
  border-radius: 14px;
`;
