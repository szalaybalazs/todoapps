import { FC } from 'react';
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

const Title: FC<iTitleProps> = ({ title }) => {
  return (
    <Wrapper>
      <Heading>⭐️ {title}</Heading>
    </Wrapper>
  );
};

export default Title;
