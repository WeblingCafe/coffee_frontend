import axiosClient, { CafeResponse } from 'libs/axios/index';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from 'hooks/useAuth';
import toast from 'react-hot-toast';

export interface FetchCategoryProps {
  categoryId: number;
  categoryName: string;
}

export default function useFetchCategoryList() {
  const { headers } = useAuth();
  const url = '/v1/categories';
  const fetchCategoryList = async () => {
    const response = await axiosClient.get<CafeResponse<FetchCategoryProps>>(url, { headers });
    return response.data?.responseObject;
  };

  return useQuery({
    queryKey: ['categoryList'],
    queryFn: () => fetchCategoryList(),
    onError: (error: any) => {
      toast.error(error.response?.data?.message);
    },
  });
}
