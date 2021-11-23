import React from 'react';
import { DisplayTitle } from '..';
import { DemoVideoWrapper } from './demovideo.styled';

const DemoVideo = () => {
  return (
    <DemoVideoWrapper id="demo">
      <DisplayTitle title="Demo Video" />

      <video autoPlay loop width="100%" height="100%" name="Video Name">
        <source src="/static/kolorbook2.mov" />
      </video>
    </DemoVideoWrapper>
  );
};

export default DemoVideo;
