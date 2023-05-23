import axiosClient, { CafeResponse } from 'libs/axios/index';
import { useMutation } from '@tanstack/react-query';
import { ISignInForm } from 'pages/auth/signin';
import toast from 'react-hot-toast';

type SignIn = {};

const useSignInMutation = () => {
  const signin = async (param: ISignInForm) => {
    const response = await axiosClient.post<CafeResponse<SignIn>>('/v1/auth/login', {
      ...param,
    });
    return response;
  };

  return useMutation({
    mutationFn: (form: ISignInForm) => signin(form),
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
    onSuccess: res => {
      let bearerToken = `${res.headers['access-authorization']}`;
      let accessToken = bearerToken.split(' ')[1];
      localStorage.setItem('access_token', accessToken);
    },
  });
};

export default useSignInMutation;
