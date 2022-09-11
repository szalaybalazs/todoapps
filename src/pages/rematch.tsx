import dynamic from 'next/dynamic';
import Head from 'next/head';
import { FC } from 'react';
import DocumentHead from '../components/Head';

const Rematch = dynamic(() => import('../routes/Rematch'), { ssr: false });

const RematchRoute: FC = () => {
  return (
    <>
      <DocumentHead
        title='Rematch | Todo apps'
        description='Rematch based state management solution for a simple todo application - Balazs Szalay'
      />
      <Rematch />
    </>
  );
};

export default RematchRoute;
