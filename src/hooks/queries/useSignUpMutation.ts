import axiosClient, { CafeResponse } from 'libs/axios/index';
import { useMutation } from '@tanstack/react-query';
import { ISignUpForm } from 'pages/auth/signup';
import toast from 'react-hot-toast';

type SignUp = {};

const useSignUpMutation = () => {
  const signup = async (param: ISignUpForm) => {
    const { data } = await axiosClient.post<CafeResponse<SignUp>>('v1/auth/register', {
      ...param,
    });

    return data;
  };

  return useMutation({
    mutationFn: (form: ISignUpForm) => signup(form),
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
};

export default useSignUpMutation;
