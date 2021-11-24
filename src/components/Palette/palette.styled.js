import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PaletteWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: row;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: row;
    justify-content: space-around;
    margin-top: 26px;
  }
`;
export const PaletteBox = styled(motion.div)`
  width: 96px;
  height: 50px;
  background: ${(props) => props.background};

  /* @media (max-width: 768px) {
    width: 50px;
  } */

  @media (min-width: 320px) and (max-width: 480px) {
    width: 45px;
  }
`;
