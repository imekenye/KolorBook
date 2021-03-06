import React from 'react';
import Link from 'next/link';
import { Close, SideMenuWrapper, Button } from './sidemenu.styled';
import { useRouter } from 'next/router';

const SideMenu = ({ setIsMenuOpen }) => {
  const router = useRouter();
  console.log(router);
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
      <Button onClick={() => router.push('/main-app')}> Go to app</Button>
    </SideMenuWrapper>
  );
};

export default SideMenu;
