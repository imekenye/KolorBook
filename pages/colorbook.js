import React from 'react';
import { Canvas, Header, MainText, Palette } from '../src/components';
import styled from 'styled-components';

const ColorBookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 20% 0 5% 0;

  @media (min-width: 768px) and (max-width: 1024px) {
    display: block;
  }
  @media (max-width: 320px) {
    width: 100%;
  }
`;

const BottomArea = styled.section`
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

function ColorBook() {
  return (
    <ColorBookWrapper>
      <Header />
      <BottomArea>
        <MainText textBig="Choose Color" textSmall="from palette" />
        <Palette />
        <Canvas />
      </BottomArea>
    </ColorBookWrapper>
  );
}

export default ColorBook;
