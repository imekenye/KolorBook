import React from 'react';
import { DisplayTitle } from '..';
import { AboutWrapper, AboutImage } from './about.styled';

const About = () => {
  return (
    <AboutWrapper id={'about'}>
      <DisplayTitle title="About" />
      <p>
        Web application for adding/filling colors to images that contain no
        color from a color pallete that is generated from an image chosen.
      </p>
      <AboutImage>
        <img alt="" src="/static/abtimg.png" />
      </AboutImage>
    </AboutWrapper>
  );
};

export default About;
