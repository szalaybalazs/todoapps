import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

interface iRematchProviderProps {
  children: ReactNode;
}

const RematchProvider: FC<iRematchProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default RematchProvider;
