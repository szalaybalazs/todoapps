import { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
const Back = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
`;
const Wrapper = styled.div`
  background: var(--background-secondary);

  border-radius: 8px;
  width: var(--max-width);
  max-width: calc(100vw - 48px);
  margin-bottom: calc(33vh);
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1), 0 0 24px 0 rgba(0, 0, 0, 0.075),
    0 0 36px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid var(--border-colour);
  overflow: hidden;
  z-index: 2;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
`;

const Checkbox = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid var(--border-colour);
  background: var(--background-primary);
`;

const Input = styled.input`
  flex: 1;
  appearance: none;
  border: none;
  font-size: 1rem;
  font-family: inherit;
  font-weight: 500;
  background-color: var(--background-secondary);
  transition: 120ms;
  margin-left: 12px;
  outline: none;
  color: inherit;
  &::placeholder {
    opacity: 1;
    color: var(--colour-secondary);
  }
`;

const Button = styled.button<{ primary?: boolean }>`
  appearance: none;
  font-family: inherit;
  font-weight: 500;
  border: none;
  color: var(--colour-font);
  padding: 4px 20px;
  margin: 0;
  font-size: 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  transition: 120ms;
  color: ${(props) =>
    `var(${props.primary ? '--background-secondary' : '--colour-font'})`};
  &:hover {
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(80%);
  }
  background: ${(props) =>
    `var(${props.primary ? '--colour-primary' : '--background-secondary'})`};
`;

const Footer = styled.footer`
  padding: 12px;
  background-color: var(--background-primary);
  border-top: 1px solid var(--border-colour);
  gap: 12px;
  display: flex;
  justify-content: flex-end;
`;

interface iTodoCreatePopupProps {
  onClose: () => void;
  onCreate: (label: string) => void;
}

const TodoCreatePopup: FC<iTodoCreatePopupProps> = ({ onClose, onCreate }) => {
  const [value, setValue] = useState('');
  const _handleEscape = useCallback(
    (e: any) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    window.addEventListener('keydown', _handleEscape);
    return () => window.removeEventListener('keydown', _handleEscape);
  }, []);

  const _handleCreate = useCallback(() => {
    onCreate(value);
  }, [onCreate, value]);

  const _handleChange = useCallback(
    ({ target: { value } }: any) => setValue(value),
    [],
  );

  const _handleKeyPress = useCallback(
    (e: any) => {
      if (e.key === 'Enter') {
        onCreate(value);
        onClose();
      }
    },
    [value],
  );

  return (
    <Backdrop>
      <Back onClick={onClose} />
      <Wrapper>
        <Container>
          <Checkbox />
          <Input
            onChange={_handleChange}
            value={value}
            onKeyDown={_handleEscape}
            autoFocus
            placeholder='New todo...'
            onKeyPress={_handleKeyPress}
          />
        </Container>
        <Footer>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={_handleCreate} primary>
            Save
          </Button>
        </Footer>
      </Wrapper>
    </Backdrop>
  );
};

export default TodoCreatePopup;
