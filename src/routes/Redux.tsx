import { FC } from 'react';
import TodoItem from '../components/TodoItem';
import Create from '../layouts/Create';
import Title from '../layouts/Title';
import ReduxProvider from '../providers/Redux/Provider';
import { useReduxTasks } from '../providers/Redux/useReduxTasks';

interface iReduxProps {}

const Redux: FC<iReduxProps> = () => {
  return (
    <ReduxProvider>
      <Title title='Redux Tasks' />
      <Logic />
      <TodoItems />
    </ReduxProvider>
  );
};

const Logic: FC = () => {
  const { create } = useReduxTasks();
  return <Create create={create} />;
};

const TodoItems = () => {
  const { todos, complete } = useReduxTasks();
  return (
    <>
      {todos.map((todo) => (
        <TodoItem {...todo} key={todo.id} onComplete={complete} />
      ))}
    </>
  );
};

export default Redux;
