import React from 'react';
import { DisplayTitle } from '..';
import { MeetWrapper, MeetImage, SocialLinks } from './meet.styled';
import SvgGithub from '../icons/Github';
import SvgLinkedin from '../icons/Linkedin';
import SvgTwitter from '../icons/Twitter';

const Meet = () => {
  return (
    <MeetWrapper>
      <DisplayTitle title="Meet the Engineer" />
      <MeetImage>
        <img src="/static/mypic.jpeg" alt="" />
      </MeetImage>
      <SocialLinks>
        <a href="https://github.com/imekenye" target="_blank" rel="noreferrer">
          <SvgGithub width="40px" height="40px" />
        </a>
        <a
          href="https://www.linkedin.com/in/isaiah-mekenye/"
          target="_blank"
          rel="noreferrer"
        >
          <SvgLinkedin width="40px" height="40px" />
        </a>
        <a
          href="https://twitter.com/ismekenye"
          target="_blank"
          rel="noreferrer"
        >
          <SvgTwitter width="40px" height="40px" />
        </a>
      </SocialLinks>
    </MeetWrapper>
  );
};

export default Meet;
