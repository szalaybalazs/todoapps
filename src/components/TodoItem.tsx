import { FC, memo, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 8px;
  border-radius: 4px;
  padding: 0 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Checkbox = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid var(--colour-secondary);
  background: var(--background-primary);
  box-shadow: none;
  cursor: pointer;
  &:checked {
    background: var(--colour-secondary);
    color: white;
    position: relative;
    &::before {
      content: '✔';
      display: block;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      inset: 0;
      background: none none;
      font-size: 0.5rem;
      color: var(--background-primary);
    }
  }
`;
const Label = styled.label<{ complete: boolean }>`
  font-size: 0.875rem;
  padding-left: 8px;
  pointer-events: none;
  text-decoration: ${(props) => (props.complete ? 'line-through' : 'none')};
  font-weight: 600;
`;

interface iTodoItemProps {
  label: string;
  id: string;
  completed: boolean;
  onComplete: (id: string) => void;
}

const TodoItem: FC<iTodoItemProps> = memo(({ label, id, onComplete }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const timeout = useRef<any>();

  const _handleCheckbox = useCallback(
    ({ target: { checked } }: any) => {
      console.log(checked);
      setIsCompleted(checked);
      clearTimeout(timeout.current);
      if (checked) timeout.current = setTimeout(() => onComplete(id), 800);
    },
    [onComplete],
  );
  return (
    <Wrapper>
      <Checkbox
        onChange={_handleCheckbox}
        checked={isCompleted}
        type='checkbox'
        id={id}
      />

      <Label complete={isCompleted} htmlFor={id}>
        {label}
      </Label>
    </Wrapper>
  );
});

TodoItem.displayName = 'TodoItem';

export default TodoItem;
