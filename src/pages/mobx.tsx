import dynamic from 'next/dynamic';
import { FC } from 'react';

const Mobx = dynamic(() => import('../routes/Mobx'), { ssr: false });

const Home: FC = () => {
  return <Mobx />;
};

export default Home;
