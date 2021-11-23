import { useState } from 'react';
import { useRouter } from 'next/router';
import SvgLogo from '../icons/Logo';
import { Bars, GeneratePallette, HeaderWrapper } from './header.styled';
import SvgPhoto from '../icons/Photo';
import Navigation from '../Navigation';
import SideMenu from '../SideMenu/index';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => setIsMenuOpen(!isMenuOpen);
  const router = useRouter();
  return (
    <HeaderWrapper>
      <SvgLogo
        style={{ cursor: 'pointer' }}
        height="36"
        width="177"
        onClick={() => router.push('/')}
      />
      <Bars onClick={() => setIsMenuOpen(true)} />
      {isMenuOpen && <SideMenu setIsMenuOpen={setIsMenuOpen} />}
      {router.pathname === '/' && <Navigation />}
      {router.pathname === '/colorbook' && (
        <GeneratePallette onClick={() => router.push('/main-app')}>
          <SvgPhoto width="24px" height="24px" />
          Choose another photo
        </GeneratePallette>
      )}
    </HeaderWrapper>
  );
}

export default Header;
