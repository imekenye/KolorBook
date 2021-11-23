import React from 'react';
import { DisplayTitleWrapper } from './displaytitle.styled';

const DisplayTitle = ({ title }) => {
  return (
    <DisplayTitleWrapper>
      <h2>{title}</h2>
    </DisplayTitleWrapper>
  );
};

export default DisplayTitle;
