import Image from 'next/image';
import styled from 'styled-components';

import { flex } from 'styles/flex';
import { font } from 'styles/fonts';

interface IOpenedContainerProps {
  children: JSX.Element;
  toggleList: () => void;
  title: string;
  count: number;
}

export default function OpenedContainer({ children, toggleList, title, count }: IOpenedContainerProps) {
  return (
    <Container>
      <Top>
        <LeftWrap>
          <Title>{title}</Title>
          <Count>{count}</Count>
        </LeftWrap>
        <Image alt="open-icon" src={'/icons/ic-open-up.svg'} width={40} height={40} onClick={toggleList} style={{cursor:'pointer'}}/>
      </Top>
      <div>{children}</div>
    </Container>
  );
}

const Container = styled.div`
  border: 1.12778px solid #eff0f6;
  border-radius: 20px;
  padding: 30px 0;
  height: 707px;
`;

const Top = styled.div`
  ${flex('space-between', 'center')}
  padding: 0 30px 23px;
`;

const LeftWrap = styled.div`
  ${flex('space-between', 'center')}
  gap: 15px;
`;

const Title = styled.span`
  ${font(28, 700, 24)}
  color: #2f2f2f;
`;

const Count = styled.span`
  ${font(24, 600, 25)}
  color: rgba(47, 47, 47, 0.4);
`;

