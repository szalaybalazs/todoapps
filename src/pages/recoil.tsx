import dynamic from 'next/dynamic';
import Head from 'next/head';
import { FC } from 'react';

const Recoil = dynamic(() => import('../routes/Recoil'), { ssr: false });

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Recoil | Todo apps</title>
        <meta
          name='description'
          content='Recoil based state management solution for a simple todo application - Balazs Szalay'
        />
      </Head>
      <Recoil />
    </>
  );
};

export default Home;
