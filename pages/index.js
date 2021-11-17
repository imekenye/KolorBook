import Head from 'next/head';
import styled from 'styled-components';
import { Header } from '../src/components';

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
`;
const BottomArea = styled.section`
  display: flex;
  justify-content: space-between;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>KolorBook</title>
        <meta name="description" content="KolorBook Application" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <MainWrapper>
        <Header />
        <BottomArea></BottomArea>
      </MainWrapper>
    </div>
  );
}
