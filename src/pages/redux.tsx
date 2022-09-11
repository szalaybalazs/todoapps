import Head from 'next/head';
import { FC } from 'react';
import Redux from '../routes/Redux';

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Redux | Todo apps</title>
        <meta
          name='description'
          content='Redux based state management solution for a simple todo application - Balazs Szalay'
        />
      </Head>
      <Redux />
    </>
  );
};

export default Home;
