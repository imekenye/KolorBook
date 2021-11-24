import styled from 'styled-components';

export const HeroWrapper = styled.div`
  display: flex;
  height: 90%;
  padding: 10% 0 3% 0;

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;
export const HeroText = styled.div`
  align-self: end;
  @media (min-width: 768px) and (max-width: 1024px) {
    align-self: center;
    margin-bottom: 5%;
    text-align: center;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    align-self: center;
    margin-bottom: 5%;
    text-align: center;
  }
`;
export const HeroTitle = styled.h1`
  font-family: Voyage;
  font-style: normal;
  font-weight: normal;
  font-size: 96px;
  line-height: 115px;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 56px;
  }
`;
export const HeroSubTitle = styled.p`
  font-family: Klarheit Grotesk;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.36em;
  text-transform: uppercase;
`;
export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  grid-gap: 32px;
  @media (min-width: 768px) and (max-width: 1024px) {
    height: 100%;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    height: 100%;
  }

  .image01 {
    grid-column: 1/2;
    grid-row: 1/2;
  }
  .image02 {
    grid-column: 2/3;
    grid-row: 1/-1;
  }
`;
export const HeroImage = styled.div`
  position: relative;
  height: 100%;
`;
