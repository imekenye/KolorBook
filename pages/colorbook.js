import React from 'react';
import { Canvas, Header, MainText, Palette } from '../src/components';
import styled from 'styled-components';
import { BottomArea } from '.';

const ColorBookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 5% 0;
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
