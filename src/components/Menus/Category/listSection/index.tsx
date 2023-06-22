import styled from 'styled-components';
import { flex } from 'styles/flex';
import { FetchCategoryProps } from 'hooks/queries/useFetchCategoryList';

import TableHeader from './tableHeader';
import TableRow from './tableRow';

export default function Table({ data }: FetchCategoryProps) {
  return (
    <Wrapper>
      <TableHeader />
      <TableRow data={data} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flex('', '', 'column')};
  flex: 1;
`;
