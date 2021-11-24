import styled from 'styled-components';

export const DisplayTitleWrapper = styled.div`
  width: 100%;
  text-align: center;

  h2 {
    position: relative;
    font-family: Voyage;
    font-style: normal;
    font-weight: normal;
    font-size: 96px;
    line-height: 115px;

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 38px;
    }

    &::before {
      content: '';
      position: absolute;
      top: 20px;
      width: 75px;
      height: 75px;
      border-radius: 9999px;
      background: rgba(255, 0, 0, 0.5);
    }
  }
`;
