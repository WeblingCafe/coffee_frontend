import styled from 'styled-components';
import { flex } from 'styles/flex';
import { FetchCategoryProps } from 'hooks/queries/useFetchCategoryList';

import TableHeader from './tableHeader';
import TableRow from './tableRow';
import { useRecoilState } from 'recoil';
import selectedIndexesState from 'store/category/atoms';

interface TableProps {
  data: FetchCategoryProps;
  handleItemClick?: (index: number) => void;
  handleItemAllClick?: () => void;
  selectedIndexes: Array<number>;
}

export default function Table(props: TableProps) {
  const { data, handleItemAllClick, handleItemClick, selectedIndexes } = props;

  return (
    <Wrapper>
      <TableHeader handleClick={handleItemAllClick} checked={selectedIndexes?.length === data?.length} />
      <TableRow data={data} handleClick={handleItemClick} selectedIndexes={selectedIndexes} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flex('', '', 'column')};
  flex: 1;
`;
