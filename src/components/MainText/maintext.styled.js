import styled from 'styled-components';

export const MainTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20%;
  width: 307px;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    margin: 0;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    margin: 0;
  }
`;
export const TextBig = styled.h1`
  font-family: Voyage;
  font-style: normal;
  font-weight: normal;
  font-size: 96px;
  line-height: 90px;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 46px;
    line-height: 40px;
    margin-top: 26px;
  }
`;
export const TextSmall = styled.p`
  margin-top: 30px;
  font-family: Klarheit Grotesk;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.36em;
  text-transform: uppercase;

  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 16px;
  }
`;
