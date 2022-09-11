import { FC, memo } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 32px;
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
`;
interface iTitleProps {
  title: string;
}

const Title: FC<iTitleProps> = memo(({ title }) => {
  return (
    <Wrapper>
      <Heading>⭐️ {title}</Heading>
    </Wrapper>
  );
});

Title.displayName = 'Title';

export default Title;
