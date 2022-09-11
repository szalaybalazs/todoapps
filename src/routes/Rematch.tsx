import { FC } from 'react';
import TodoItem from '../components/TodoItem';
import Create from '../layouts/Create';
import Title from '../layouts/Title';
import RematchProvider from '../providers/Rematch/Provider';
import { useRematchTasks } from '../providers/Rematch/useRematchTasks';

interface iRematchProps {}

const Rematch: FC<iRematchProps> = () => {
  return (
    <RematchProvider>
      <Title title='Rematch Tasks' />
      <Logic />
      <TodoItems />
    </RematchProvider>
  );
};

const Logic: FC = () => {
  const { create } = useRematchTasks();
  return <Create create={create} />;
};

const TodoItems = () => {
  const { todos, complete } = useRematchTasks();
  return (
    <>
      {todos.map((todo) => (
        <TodoItem {...todo} key={todo.id} onComplete={complete} />
      ))}
    </>
  );
};

export default Rematch;
