import '../styles/globals.scss';

import type { AppProps } from 'next/app';
import Layout from '@layouts/Layout';
import MainLayout from '@layouts/MainLayout';

function MyApp({ Component, pageProps }: AppProps) {
  const { displayName } = Component;

  if (displayName === 'Main') {
    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    );
  } else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
