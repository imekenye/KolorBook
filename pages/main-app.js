import Head from 'next/head';
import styled from 'styled-components';
import { Header, ImageGrid, MainText } from '../src/components';

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 20% 0 5% 0;

  @media (max-width: 768px) {
    display: block;
  }
`;
export const BottomArea = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    height: 100vh;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    display: block;
    height: 100vh;
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
        <BottomArea>
          <MainText textBig="Choose Any Pic" textSmall="from the gallery" />
          <ImageGrid />
        </BottomArea>
      </MainWrapper>
    </>
  );
}
