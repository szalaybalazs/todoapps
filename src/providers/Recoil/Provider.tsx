import { FC, ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

interface iRecoilProviderProps {
  children: ReactNode;
}

const RecoilProvider: FC<iRecoilProviderProps> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilProvider;
