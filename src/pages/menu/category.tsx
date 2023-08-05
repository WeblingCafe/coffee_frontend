import { useEffect } from 'react';
import MenuLayout from '@components/Menus/Layout';
import CategoryHeaderSection from '@components/Menus/Category/headerSection';
import { useAuth } from '@hooks/useAuth';
import useFetchCategoryList from '@hooks/queries/useFetchCategoryList';
import Table from '@components/Menus/Category/listSection';
import { useRecoilState } from 'recoil';
import selectedIndexesState from '@store/category/atoms';

const Category = () => {
  const { headers } = useAuth();
  const { status, data, error, isFetching } = useFetchCategoryList();
  const [selectedIndexes, setSelectedIndexes] = useRecoilState(selectedIndexesState);

  const handleItemClick = (index: number) => {
    const selectedIndex = selectedIndexes.includes(index)
      ? selectedIndexes.filter(i => i !== index)
      : [...selectedIndexes, index];
    console.log('선택삭제', selectedIndex);
    setSelectedIndexes(selectedIndex);
  };

  const handleItemAllClick = () => {
    const selectedAllIndex = data?.map(el => el.categoryId);
    if (JSON.stringify(selectedIndexes) === JSON.stringify(selectedAllIndex)) {
      setSelectedIndexes([]);
    } else {
      setSelectedIndexes(selectedAllIndex);
    }
  };

  const handleAddCategory = () => {};

  return (
    <MenuLayout>
      <CategoryHeaderSection categoryNum={data?.length} />
      <Table
        data={data}
        handleItemAllClick={handleItemAllClick}
        handleItemClick={handleItemClick}
        selectedIndexes={selectedIndexes}
      />
    </MenuLayout>
  );
};

export default Category;
