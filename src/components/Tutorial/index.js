import React from 'react';
import { DisplayTitle } from '..';
import { TutorialWrapper } from './tutorial.styled';

const Tutotial = () => {
  return (
    <TutorialWrapper id="tutorial">
      <DisplayTitle title="Tutorial" />
      <p>This is how you interact with the application</p>
      <ol>
        <li>
          Go to the <a>Main application</a>{' '}
        </li>
        <li>Choose any image to generate a color palette</li>
        <li>Pick any color from the palette</li>
        <li>Color the image using different colors</li>
      </ol>
    </TutorialWrapper>
  );
};

export default Tutotial;
