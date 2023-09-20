import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Input from '@src/components/common/atoms/Input';
import RegistrationForm from '@src/components/common/organisms/RegisterForm';
import { DropdownMolecule } from '@src/components/common/molecules/DropdownMolecule';
import { useAuth } from '@hooks/useAuth';
import { useSession } from 'next-auth/react';
import { Card, Space } from 'antd';

export default function Home() {
  // const { isLogin } = useAuth();

  // const router = useRouter();

  // useEffect(() => {
  //   // 화면 깜빡이는 증상 관련 예외처리
  //   const hasToken = localStorage.getItem('access_token');
  //   if (hasToken) return;
  //   if (!isLogin) {
  //     router.push('/auth/signin');
  //   }
  // }, [isLogin, router]);
  const { data } = useSession();
  console.log('userData', data);

  return (
    <>
      <Layout>
        <>
          <Input id="test1" name="test1" placeHolder="리나테스트1" />
          <Input id="test2" name="test2" placeHolder="리나테스트2" styleType="search" />
          <RegistrationForm />
          <DropdownMolecule />
        </>
      </Layout>
    </>
  );
}
