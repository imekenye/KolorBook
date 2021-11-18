import styled from 'styled-components';

export const PaletteWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const PaletteBox = styled.div`
  width: 96px;
  height: 50px;
  background: ${(props) => props.background};
`;
