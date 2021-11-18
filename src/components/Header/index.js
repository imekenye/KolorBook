import { useRouter } from 'next/router';
import SvgLogo from '../icons/Logo';
import { GeneratePallette, HeaderWrapper } from './header.styled';
import SvgPhoto from '../icons/Photo';

function Header() {
  const router = useRouter();
  return (
    <HeaderWrapper>
      <SvgLogo
        style={{ cursor: 'pointer' }}
        height="36"
        width="177"
        onClick={() => router.push('/')}
      />
      {router.pathname === '/colorbook' && (
        <GeneratePallette onClick={() => router.push('/')}>
          <SvgPhoto width="24px" height="24px" />
          Choose another photo
        </GeneratePallette>
      )}
    </HeaderWrapper>
  );
}

export default Header;
