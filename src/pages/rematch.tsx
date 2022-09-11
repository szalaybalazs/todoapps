import dynamic from 'next/dynamic';
import Head from 'next/head';
import { FC } from 'react';

const Rematch = dynamic(() => import('../routes/Rematch'), { ssr: false });

const RematchRoute: FC = () => {
  return (
    <>
      <Head>
        <title>Rematch | Todo apps</title>
        <meta
          name='description'
          content='Rematch based state management solution for a simple todo application - Balazs Szalay'
        />
      </Head>
      <Rematch />
    </>
  );
};

export default RematchRoute;
