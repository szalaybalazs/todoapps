import dynamic from 'next/dynamic';
import { FC } from 'react';

const Recoil = dynamic(() => import('../routes/Recoil'), { ssr: false });

const Home: FC = () => {
  return <Recoil />;
};

export default Home;
