import { FC } from 'react';
import TodoItem from '../components/TodoItem';
import Create from '../layouts/Create';
import Title from '../layouts/Title';
import RecoilProvider from '../providers/Recoil/Provider';
import { useRecoilTasks } from '../providers/Recoil/useRecoilTasks';

interface iRecoilProps {}

const Recoil: FC<iRecoilProps> = () => {
  return (
    <RecoilProvider>
      <Title title='Recoil Tasks' />
      <Logic />
      <TodoItems />
    </RecoilProvider>
  );
};

const Logic: FC = () => {
  const { create } = useRecoilTasks();
  return <Create create={create} />;
};

const TodoItems = () => {
  const { todos, complete } = useRecoilTasks();
  return (
    <>
      {todos.map((todo) => (
        <TodoItem {...todo} key={todo.id} onComplete={complete} />
      ))}
    </>
  );
};

export default Recoil;
