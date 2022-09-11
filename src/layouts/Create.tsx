import { memo, FC, useCallback, useEffect, useState } from 'react';
import TodoCreate from '../components/TodoCreate';
import TodoCreatePopup from '../components/TodoCreatePopup';

interface iCreateProps {
  create: (label: string) => void;
}

const Create: FC<iCreateProps> = memo(({ create }) => {
  const [isAdding, setIsAdding] = useState(false);

  const _handleClose = useCallback(() => setIsAdding(false), []);
  const _handleKeyDown = useCallback(
    (e: any) => {
      if (e.code === 'Space' && e.ctrlKey) {
        e.preventDefault();
        e.stopPropagation();
        setIsAdding(true);
      }
    },

    [],
  );

  useEffect(() => {
    window.addEventListener('keydown', _handleKeyDown);
    return () => window.removeEventListener('keydown', _handleKeyDown);
  }, []);

  const _handleCreate = useCallback(
    (label: string) => label && create(label),
    [create],
  );

  return (
    <>
      <TodoCreate onCreate={_handleCreate} />
      {isAdding && (
        <TodoCreatePopup onCreate={_handleCreate} onClose={_handleClose} />
      )}
    </>
  );
});

Create.displayName = 'CreateInput';

export default Create;
