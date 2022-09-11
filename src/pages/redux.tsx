import Head from 'next/head';
import { FC } from 'react';
import DocumentHead from '../components/Head';
import Redux from '../routes/Redux';

const Home: FC = () => {
  return (
    <>
      <DocumentHead
        title='Redux | Todo apps'
        description='Redux based state management solution for a simple todo application - Balazs Szalay'
      />
      <Redux />
    </>
  );
};

export default Home;
