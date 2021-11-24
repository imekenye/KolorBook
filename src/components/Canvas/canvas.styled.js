import styled from 'styled-components';

export const CanvasWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 473px;
  background: rgba(196, 196, 196, 0.17);
  flex: 2;
  p {
    position: absolute;
    left: 10px;
    top: 10px;
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 10px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    justify-content: space-around;
    max-height: 100vh;
    max-width: 100%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    max-height: 100vh;
    max-width: 100%;
    margin-top: 26px;
    padding: 20% 0;
  }
`;
