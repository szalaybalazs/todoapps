import dynamic from 'next/dynamic';
import Head from 'next/head';
import { FC } from 'react';

const Mobx = dynamic(() => import('../routes/Mobx'), { ssr: false });

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>MobX | Todo apps</title>
        <meta
          name='description'
          content='MobX based state management solution for a simple todo application - Balazs Szalay'
        />
      </Head>
      <Mobx />
    </>
  );
};

export default Home;
