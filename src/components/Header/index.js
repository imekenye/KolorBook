import React from 'react';
import SvgColorPallette from '../icons/ColorPallette';
import SvgLogo from '../icons/Logo';
import { GeneratePallette, HeaderWrapper } from './header.styled';

function Header() {
  return (
    <HeaderWrapper>
      <SvgLogo height="36" width="177" />
      <GeneratePallette>
        <SvgColorPallette width="24px" height="24px" />
        generate pallette
      </GeneratePallette>
    </HeaderWrapper>
  );
}

export default Header;
