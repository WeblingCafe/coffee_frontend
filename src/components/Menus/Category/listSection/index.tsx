import styled from 'styled-components';
import { flex } from 'styles/flex';
import { FetchCategoryProps } from 'hooks/queries/useFetchCategoryList';

import TableHeader from './tableHeader';
import TableRow from './tableRow';
import { useRecoilState } from 'recoil';
import selectedIndexesState from 'store/category/atoms';

export default function Table({ data }: FetchCategoryProps) {
  const [selectedIndexes, setSelectedIndexes] = useRecoilState(selectedIndexesState);

  const handleClick = (index: number) => {
    const selectedIndex = selectedIndexes.includes(index)
      ? selectedIndexes.filter(i => i !== index)
      : [...selectedIndexes, index];
    console.log('선택삭제', selectedIndex);
    setSelectedIndexes(selectedIndex);
  };

  const handleClickAll = () => {
    const selectedAllIndex = data.map(el => el.categoryId);
    console.log('selectedIndexes', selectedIndexes);
    console.log('selectedAllIndex', selectedAllIndex);
    console.log('똑같음?', selectedIndexes === selectedAllIndex);
    if (JSON.stringify(selectedIndexes) === JSON.stringify(selectedAllIndex)) {
      setSelectedIndexes([]);
    } else {
      setSelectedIndexes(selectedAllIndex);
    }
  };

  return (
    <Wrapper>
      <TableHeader handleClick={handleClickAll} checked={selectedIndexes?.length === data?.length}/>
      <TableRow data={data} handleClick={handleClick} selectedIndexes={selectedIndexes} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flex('', '', 'column')};
  flex: 1;
`;
