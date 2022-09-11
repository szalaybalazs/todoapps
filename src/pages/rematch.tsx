import dynamic from 'next/dynamic';
import { FC } from 'react';

const Rematch = dynamic(() => import('../routes/Rematch'), { ssr: false });

const RematchRoute: FC = () => {
  return <Rematch />;
};

export default RematchRoute;
