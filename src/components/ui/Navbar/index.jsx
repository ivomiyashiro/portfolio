import { Link } from 'react-scroll';
import { useNavbar } from './useNavbar';

import { ButtonComponent as Button } from '../';
import { MenuItems, AsideMenu } from './components';

import { BarsIcon, TimesIcon } from '../../icons';
import { Header, Nav, Div, Wrapper, H1, Span } from './styles';

export const Navbar = () => {

  const { show, isContentVisible, isMobileMenuOpen, isWindowOnTop, toggleMenuVisibility } = useNavbar();

  return (
    <Header visible={ show } isWindowOnTop={ isWindowOnTop }>
      <Nav>
        <Div>
          <Link to='hero' smooth>
            <H1>Dev<Span>.</Span></H1>
          </Link>
        </Div>
        <MenuItems />
        <Wrapper>
          <Button onClick={ toggleMenuVisibility }>
            {
              !isMobileMenuOpen
                ? <BarsIcon size={ 20 } />
                : <TimesIcon size={ 20 } />
            }
          </Button>
        </Wrapper>
      </Nav>
      <AsideMenu isOpen={ isContentVisible } handleMenuOpen={ toggleMenuVisibility } />
    </Header>
  );
};
