import React from 'react';
import { PaletteWrapper, PaletteBox } from './palette.styled';
import { useRecoilValue, useRecoilState } from 'recoil';
import { colorsState, currentColorState } from '../../atoms/color';

const Palette = () => {
  const colors = useRecoilValue(colorsState);
  const [currentColor, setCurrentColor] = useRecoilState(currentColorState);
  return (
    <PaletteWrapper>
      {colors &&
        colors.map((color) => (
          <PaletteBox
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentColor(color)}
            key={color}
            background={color}
          />
        ))}
    </PaletteWrapper>
  );
};

export default Palette;
