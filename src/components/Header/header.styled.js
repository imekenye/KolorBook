import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
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
  letter-spacing: 0.19em;

  svg {
    margin-right: 8px;
  }
`;
