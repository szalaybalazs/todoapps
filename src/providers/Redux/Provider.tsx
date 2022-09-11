import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

interface iReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider: FC<iReduxProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
