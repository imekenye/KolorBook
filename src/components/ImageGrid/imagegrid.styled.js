import styled from 'styled-components';

export const ImageGridWrapper = styled.div`
  display: grid;
  grid-gap: 4%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  flex-grow: 2;

  &div:nth-child(1) {
    grid-column: 1/2;
    grid-row: 1/2;
  }
  &:nth-child(2) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
  &:nth-child(3) {
    grid-column: 2/3;
    grid-row: 1/-1;
  }
  &:nth-child(4) {
    grid-column: 3/4;
    grid-row: 1/2;
  }
  &:nth-child(1) {
    grid-column: 3/4;
    grid-row: 2/3;
  }
`;
export const ImageContainer = styled.div``;
