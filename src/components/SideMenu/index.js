import React from 'react';
import Link from 'next/link';
import { Close, SideMenuWrapper } from './sidemenu.styled';

const SideMenu = ({ setIsMenuOpen }) => {
  return (
    <SideMenuWrapper onClick={() => setIsMenuOpen(false)}>
      <Close onClick={() => setIsMenuOpen(false)} />
      <Link href="/">
        <a onClick={() => window.location.replace('/#about')}>About</a>
      </Link>
      <Link href="/">
        <a onClick={() => window.location.replace('/#features')}>Features</a>
      </Link>
      <Link href="/">
        <a onClick={() => window.location.replace('/#demo')}>Demo</a>
      </Link>
      <Link href="/">
        <a onClick={() => window.location.replace('/#tutorial')}>Tutorial</a>
      </Link>
    </SideMenuWrapper>
  );
};

export default SideMenu;
