import styled from 'styled-components';
import SvgMenuClose from '../icons/MenuClose';

export const SideMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  background: white;
  height: 100vh;
  padding: 10%;

  a {
    position: relative;
    font-family: Voyage;
    font-style: normal;
    font-weight: normal;
    font-size: 96px;
    line-height: 115px;
    cursor: pointer;

    &:hover {
      &::before {
        content: '';
        position: absolute;
        left: 10px;
        width: 50px;
        height: 50px;
        border-radius: 9999px;
        background: rgba(255, 0, 0, 0.5);
      }
    }
  }
`;

export const Close = styled(SvgMenuClose)`
  position: absolute;
  right: 50px;
  top: 50px;
  font-size: 3rem;
`;
