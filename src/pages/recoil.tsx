import dynamic from 'next/dynamic';
import Head from 'next/head';
import { FC } from 'react';
import DocumentHead from '../components/Head';

const Recoil = dynamic(() => import('../routes/Recoil'), { ssr: false });

const Home: FC = () => {
  return (
    <>
      <DocumentHead
        title='Recoil | Todo apps'
        description='Recoil based state management solution for a simple todo application - Balazs Szalay'
      />

      <Recoil />
    </>
  );
};

export default Home;
