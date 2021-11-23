import styled from 'styled-components';
import SvgMenu from '../icons/Menu';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;
export const GeneratePallette = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 42px;
  color: white;
  background: rgba(255, 0, 0, 0.5);
  border: none;
  text-transform: uppercase;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.12em;
  cursor: pointer;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 10px;
    letter-spacing: 0.1em;
    width: 300px;
    margin-left: 16px;
  }

  svg {
    margin-right: 8px;
  }
`;

export const Bars = styled(SvgMenu)`
  display: none;

  @media (min-width: 768px) and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 2rem;
    cursor: pointer;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 2rem;
    cursor: pointer;
  }
`;
