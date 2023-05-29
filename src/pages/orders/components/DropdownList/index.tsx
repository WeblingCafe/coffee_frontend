import { useState } from 'react';

import styled from 'styled-components';
import ClosedContainer from './ClosedContainer';
import OpenedContainer from './OpenedContainer';
import { font } from 'styles/fonts';

interface IDropDownListProps {
  title: string;
  count: number;
  initialValue?: boolean;
  children: JSX.Element;
}

export default function DropDownList({ title, count, initialValue = true, children }: IDropDownListProps) {
  const [isOpen, setIsOpen] = useState(initialValue);

  const toggleList = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <Container>
      {isOpen ? (
        <OpenedContainer toggleList={toggleList} title={title} count={count}>
          {children}
        </OpenedContainer> 
      ) : (
        <ClosedContainer toggleList={toggleList} title={title} count={count} />
      )}
    </Container>
  );
}

const Container = styled.div`
${font(18, 700, 16.8)}  
color: #2F2F2F;
margin-bottom: 16px;
`;
