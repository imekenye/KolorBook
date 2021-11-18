import React from 'react';
import { CanvasWrapper } from './canvas.styled';
import SvgArtOne from '../icons/ArtOne';
import { useRecoilValue, useRecoilState } from 'recoil';
import { currentColorState, fillColorState } from '../../atoms/color';

const Canvas = () => {
  const currentColor = useRecoilValue(currentColorState);

  const [fillColor, setFillColors] = useRecoilState(fillColorState);

  const onFillColor = (i) => {
    let newFillColors = fillColor.slice(0);
    newFillColors[i] = currentColor;
    setFillColors(newFillColors);
  };
  return (
    <CanvasWrapper>
      <SvgArtOne
        width="70%"
        height="70%"
        fillColor={fillColor}
        onFill={onFillColor}
      />
    </CanvasWrapper>
  );
};

export default Canvas;
