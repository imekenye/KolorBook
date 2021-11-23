import React from 'react';
import Link from 'next/link';
import { ButtonWrapper, NavigationWrapper } from './navigation.styled';
import { useRouter } from 'next/router';

const Navigation = () => {
  const router = useRouter();
  return (
    <NavigationWrapper>
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
      <ButtonWrapper onClick={() => router.push('/main-app')}>
        <button>Go to app</button>
      </ButtonWrapper>
    </NavigationWrapper>
  );
};

export default Navigation;
