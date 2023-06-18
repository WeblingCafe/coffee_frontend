import Image from 'next/image';
import styled from 'styled-components';
import { flex } from 'styles/flex';

import { font } from 'styles/fonts';

interface IClosedContainerProps {
  toggleList: () => void;
  title: string;
  count: number;
}

export default function ClosedContainer({ toggleList, title, count }: IClosedContainerProps) {
  return (
    <Container>
      <LeftWrap>
        <Title>{title}</Title>
        <Count>{count}</Count>
      </LeftWrap>
      <Image alt="open-icon" src={'/icons/ic-open-down.svg'} width={40} height={40} onClick={toggleList} style={{cursor:'pointer'}}/>
    </Container>
  );
}

const Container = styled.div`
  ${flex('space-between', 'center')}
  border: 1.12778px solid #eff0f6;
  border-radius: 20px;
  padding: 30px;
`;

const LeftWrap = styled.div`
  ${flex('center', 'center')}
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
