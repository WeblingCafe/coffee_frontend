import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

import { useAuth } from 'hooks/useAuth';
import { Card, Space } from 'antd';

export default function Home() {
  const { isLogin } = useAuth();

  const router = useRouter();

  useEffect(() => {
    // 화면 깜빡이는 증상 관련 예외처리
    const hasToken = localStorage.getItem('access_token');
    if (hasToken) return;
    if (!isLogin) {
      router.push('/auth/signin');
    }
  }, [isLogin, router]);

  return (
    <>
      <Layout>
        <Space direction="vertical" size={16}>
          <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Space>
      </Layout>
    </>
  );
}
