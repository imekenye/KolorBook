import styled from 'styled-components';

export const TutorialWrapper = styled.div`
  margin-top: 20%;
  text-align: center;
  width: 40%;
  margin: 0 auto;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;
    margin-top: 25%;
  }

  ol {
    margin-top: 10%;
  }
`;
