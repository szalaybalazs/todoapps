import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import TodoItem from '../components/TodoItem';
import Create from '../layouts/Create';
import Title from '../layouts/Title';
import { Store, store } from '../providers/Mobx';
import { iTask } from '../types';

interface iMobxProps {}

const Mobx: FC<iMobxProps> = () => {
  return (
    <>
      <Title title='Mobx Tasks' />
      <Logic store={store} />
      <TodoItems store={store} />
    </>
  );
};

const Logic: FC<{ store: Store }> = observer(({ store }) => {
  return <Create create={store.create} />;
});

const TodoItems: FC<{ store: Store }> = observer(({ store }) => {
  return (
    <>
      {store.todos.map((todo) => (
        <TodoItem {...todo} key={todo.id} onComplete={store.complete} />
      ))}
    </>
  );
});

export default Mobx;
