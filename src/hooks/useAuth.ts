import { useRecoilState } from 'recoil';
import { loginStateAtom, getHeadersAtom } from 'store/auth/atoms';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const useAuth = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginStateAtom);
  const [headers, setHeaders] = useRecoilState(getHeadersAtom);
  const router = useRouter();

  useEffect(() => {
    const hasToken = localStorage.getItem('access_token');
    if (hasToken) {
      setIsLogin(true);
      setHeaders(hasToken);
    } else {
      setIsLogin(false);
    }

    // setIsLogin(hasToken ? true : false);
  }, [setIsLogin, setHeaders]);

  useEffect(() => {
    if (!isLogin && router.asPath.includes('/auth/')) {
      return;
    }
    if (!isLogin) {
      router.replace('/auth/signin');
      return;
    }
  }, [isLogin, router]);

  return { isLogin, headers };
};
