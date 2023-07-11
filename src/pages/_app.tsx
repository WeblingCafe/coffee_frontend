import type { AppProps,  } from 'next/app';
// import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import GlobalStyle from 'styles/GlobalStyle';
import Layout from '../components/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const router = useRouter();



  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ReactQueryDevtools initialIsOpen />
        <GlobalStyle />
        <RecoilRoot>
          {!router.pathname.includes('auth') ? (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          ) : (
            <Component {...pageProps} />
          )}
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
