import axiosClient, { CafeResponse } from 'libs/axios/index';
import { useMutation } from '@tanstack/react-query';
import { useAuth } from 'hooks/useAuth';

export interface MutateCategoryProps {
  categoryName: string;
}

export default function useCategoryMutate() {
  const { headers } = useAuth();
  const url = '/v1/categories';

  const MutateCategory = async (categoryName: MutateCategoryProps) => {
    const response = await axiosClient.post(url, categoryName, {
      headers: headers,
    });
  };
}
