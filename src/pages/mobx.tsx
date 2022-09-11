import dynamic from 'next/dynamic';
import Head from 'next/head';
import { FC } from 'react';
import DocumentHead from '../components/Head';

const Mobx = dynamic(() => import('../routes/Mobx'), { ssr: false });

const Home: FC = () => {
  return (
    <>
      <DocumentHead
        title='MobX | Todo apps'
        description='MobX based state management solution for a simple todo application - Balazs Szalay'
      />
      <Mobx />
    </>
  );
};

export default Home;
