import styled from 'styled-components';
import SvgMenu from '../icons/Menu';

export const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: center;
  @media (min-width: 768px) and (max-width: 1024px) {
    visibility: hidden;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    visibility: hidden;
  }

  a {
    position: relative;
    cursor: pointer;
    &:hover {
      &::before {
        content: '';
        position: absolute;
        left: 10px;
        width: 18px;
        height: 18px;
        border-radius: 9999px;
        background: rgba(255, 0, 0, 0.5);
      }
    }
  }
`;
export const ButtonWrapper = styled.div`
  button {
    width: 172px;
    height: 39px;
    background: rgba(255, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;
