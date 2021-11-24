import Head from 'next/head';
import styled from 'styled-components';
import {
  About,
  DemoVideo,
  Features,
  Header,
  Hero,
  Meet,
  Tutorial,
} from '../src/components';

const MainWrapper = styled.main`
  display: block;
  height: 100%;
  padding: 5% 0;

  @media (max-width: 768px) {
    display: block;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    display: block;
    width: 100%;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>KolorBook</title>
        <meta name="description" content="KolorBook Application" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <MainWrapper>
        <Header />
        <Hero />
        <About />
        <Features />
        <DemoVideo />
        <Tutorial />
        <Meet />
      </MainWrapper>
    </>
  );
}
