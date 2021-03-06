import styled from 'styled-components';

export const FeaturesWrapper = styled.div`
  padding-top: 20%;
`;
export const FeaturesList = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  margin-top: 10%;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;
  }
`;
