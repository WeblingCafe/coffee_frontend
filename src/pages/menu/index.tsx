import styled from 'styled-components';
import { font } from 'styles/fonts';
import MenuLayout from 'components/Menus/Layout';

const Menu = () => {
  return (
    <MenuLayout>
      <div>메뉴</div>
    </MenuLayout>
  );
};

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

export default Menu;
