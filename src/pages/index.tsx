import Head from 'next/head';
import { FC } from 'react';
import DocumentHead from '../components/Head';
import Context from '../routes/Context';

const Home: FC = () => {
  return (
    <>
      <DocumentHead
        title='React Context | Todo apps'
        description='React Context based state management solution for a simple todo application - Balazs Szalay'
      />
      <Context />
    </>
  );
};

export default Home;
