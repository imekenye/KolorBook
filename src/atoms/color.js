import { atom } from 'recoil';

export const colorsState = atom({
  key: 'colorsState',
  default: [],
});

export const fillColorState = atom({
  key: 'fillColorState',
  default: Array(8).fill('white'),
});

export const currentColorState = atom({
  key: 'currentColorState',
  default: '#A84CA0',
});
