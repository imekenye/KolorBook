import * as Vibrant from 'node-vibrant';
import { useRecoilState, useRecoilValue } from 'recoil';
import { colorsState } from '../atoms/color';

export const useColor = () => {
  const [colorValues, setColorValues] = useRecoilState(colorsState);
  const colors = useRecoilValue(colorsState);

  const getColors = (url) => {
    setColorValues([]);
    Vibrant.from(url).getPalette((err, palette) => {
      for (let swatch in palette) {
        if (palette.hasOwnProperty(swatch) && palette[swatch]) {
          setColorValues((colorValues) => [
            ...colorValues,
            palette[swatch].getHex(),
          ]);
        }
      }
    });
  };

  return [colors, getColors];
};
