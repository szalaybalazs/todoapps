import Head from 'next/head';
import { FC } from 'react';
import Context from '../routes/Context';

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>React Context | Todo apps</title>
        <meta
          name='description'
          content='React Context based state management solution for a simple todo application - Balazs Szalay'
        />
      </Head>
      <Context />
    </>
  );
};

export default Home;
