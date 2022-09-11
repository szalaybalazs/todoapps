import { FC, useCallback } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  appearance: none;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  background: none;
  color: var(--colour-font);
  font-size: 1rem;
  font-family: inherit;
  font-weight: 500;
  padding-inline: 16px;
  box-sizing: border-box;
  height: 48px;
  background-color: var(--background-secondary);
  border-radius: 6px;
  margin-bottom: 24px;
  display: block;
  transition: box-shadow 120ms;
  &::placeholder {
    opacity: 1;
    color: var(--colour-secondary);
  }
  &:focus {
    box-shadow: 0 0 0 2px var(--colour-primary);
  }
`;
interface iTodoCreateProps {
  onCreate: (label: string) => void;
}

const TodoCreate: FC<iTodoCreateProps> = ({ onCreate }) => {
  const _handleKeyPress = useCallback(
    (e: any) => {
      if (e.key === 'Enter') {
        onCreate(e.target.value);
        e.target.value = '';
      }
    },
    [onCreate],
  );
  return <Input placeholder='Create new todo...' onKeyDown={_handleKeyPress} />;
};

export default TodoCreate;
