import { FC } from 'react';
import TodoItem from '../components/TodoItem';
import Create from '../layouts/Create';
import Title from '../layouts/Title';
import ContextProvider from '../providers/Context/Provider';
import { useContextTasks } from '../providers/Context/useContextTasks';

interface iContextProps {}

const Context: FC<iContextProps> = () => {
  return (
    <ContextProvider>
      <Title title='Context Tasks' />
      <Logic />
      <TodoItems />
    </ContextProvider>
  );
};

const Logic: FC = () => {
  const { create } = useContextTasks();
  return <Create create={create} />;
};

const TodoItems = () => {
  const { todos, complete } = useContextTasks();
  return (
    <>
      {todos.map((todo) => (
        <TodoItem {...todo} key={todo.id} onComplete={complete} />
      ))}
    </>
  );
};

export default Context;
