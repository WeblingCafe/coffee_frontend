import { useEffect } from 'react';
import MenuLayout from 'components/Menus/Layout';
import CategoryHeaderSection from 'components/Menus/Category/headerSection';
import { useAuth } from 'hooks/useAuth';
import useFetchCategoryList from 'hooks/queries/useFetchCategoryList';
import Table from 'components/Menus/Category/listSection';
import { useRecoilState } from 'recoil';
import selectedIndexesState from 'store/category/atoms';

const Category = () => {
  const { headers } = useAuth();
  const { status, data, error, isFetching } = useFetchCategoryList();


  return (
    <MenuLayout>
      <CategoryHeaderSection categoryNum={data?.length} />
      <Table data={data} />
    </MenuLayout>
  );
};

export default Category;
