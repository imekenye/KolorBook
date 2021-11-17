import React from 'react';
import { MainTextWrapper, TextBig, TextSmall } from './maintext.styled';

function MainText({ textBig, textSmall }) {
  return (
    <MainTextWrapper>
      <TextBig>{textBig}</TextBig>
      <TextSmall>{textSmall}</TextSmall>
    </MainTextWrapper>
  );
}

export default MainText;
