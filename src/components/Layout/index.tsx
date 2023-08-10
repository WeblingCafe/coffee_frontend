import styled from 'styled-components';
import SideBar from './SideBar';

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <Container>
      <SideBar />
      <Wrap>{children}</Wrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Wrap = styled.div`
  position: relative;
  left: 20%;
  width: 80%;
  padding: 0 40px;
`;
