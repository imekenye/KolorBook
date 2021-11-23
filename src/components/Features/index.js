import React from 'react';
import { DisplayTitle } from '..';
import Feature from '../Feature';
import SvgInterface from '../icons/Interface';
import SvgPalette from '../icons/Palette';
import SvgPicker from '../icons/Picker';
import { FeaturesWrapper, FeaturesList } from './features.styled';

const Features = () => {
  return (
    <FeaturesWrapper id={'features'}>
      <DisplayTitle title="Features" />

      <FeaturesList>
        <Feature
          text="Color Palette Generator"
          image={<SvgPalette width="40px" height="40px" />}
        />
        <Feature
          text="Color Picker"
          image={<SvgPicker width="40px" height="40px" />}
        />
        <Feature
          text="User friendly interface"
          image={<SvgInterface width="40px" height="40px" />}
        />
      </FeaturesList>
    </FeaturesWrapper>
  );
};

export default Features;
