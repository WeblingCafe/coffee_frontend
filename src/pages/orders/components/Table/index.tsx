import styled from 'styled-components';

import TableHeader from './TableHeader';
import TableRow from './TableRow';

import { flex } from 'styles/flex';

function Table() {
  return (
    <Wrapper>
      <TableHeader />
      <TableRow />
    </Wrapper>
  );
}

export default Table;

const Wrapper = styled.div`
  ${flex('', '', 'column')};
  flex: 1;
`;
