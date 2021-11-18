import Head from 'next/head';
import styled from 'styled-components';
import { Header, ImageGrid, MainText } from '../src/components';

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 5% 0;
`;
export const BottomArea = styled.section`
  display: flex;
  gap: 32px;
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
