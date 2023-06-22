import MenuLayout from 'components/Menus/Layout';
import CategoryHeaderSection from 'components/Menus/Category/headerSection';
import { useAuth } from 'hooks/useAuth';
import useFetchCategoryList from 'hooks/queries/useFetchCategoryList';
import Table from 'components/Menus/Category/listSection';

const Category = () => {
  const { headers } = useAuth();
  const { status, data, error, isFetching } = useFetchCategoryList();

  console.log('===data', data);

  return (
    <MenuLayout>
      <CategoryHeaderSection />
      <Table data={data} />
    </MenuLayout>
  );
};

export default Category;
