import Head from 'next/head';
import styled from 'styled-components';
import Footer from '../components/Footer';
import DocumentHead from '../components/Head';
import Header from '../components/Header';
import '../main.scss';

const Wrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Content = styled.main`
  padding-top: 48px;
  width: 100%;
  flex: 1;
  max-width: var(--max-width);
  width: calc(100vw - 48px);
  margin: auto;
`;

function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
      <DocumentHead />
      <Header />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
    </Wrapper>
  );
}

export default MyApp;
