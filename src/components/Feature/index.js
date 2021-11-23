import React from 'react';
import { FeatureWrapper } from './feature.styled';

const Feature = ({ text, image }) => {
  return (
    <FeatureWrapper>
      {image}
      <p>{text}</p>
    </FeatureWrapper>
  );
};

export default Feature;
