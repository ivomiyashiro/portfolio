import { Link } from 'react-scroll';
import { SocialMedia } from './SocialMedia';
import { Div, Li, Menu, P, Span, Ul } from './styles';

export const AsideMenu = ({ isOpen, handleMenuOpen }) => {

  return (
    <Menu isOpen={ isOpen }>
      <Ul isOpen={ isOpen }>
        <Li>
          <Link to='about' smooth offset={ -100 } onClick={ () => handleMenuOpen( false ) }>
            <Div>
              <P>About</P>
              <Span>.</Span>
            </Div>
          </Link>
        </Li>
        <Li>
          <Link to='experience' smooth offset={ -50 } onClick={ () => handleMenuOpen( false ) }>
            <Div>
              <P>Experience</P>
              <Span>.</Span>
            </Div>
          </Link>
        </Li>
        <Li>
          <Link to='skills' smooth offset={ -50 } onClick={ () => handleMenuOpen( false ) }>
            <Div>
              <P>Skills</P>
              <Span>.</Span>
            </Div>
          </Link>
        </Li>
        <Li>
          <Link to='projects' smooth offset={ -50 } onClick={ () => handleMenuOpen( false ) }>
            <Div>
              <P>Projects</P>
              <Span>.</Span>
            </Div>
          </Link>
        </Li>
        <Li>
          <Link to='contact' smooth offset={ -50 } onClick={ () => handleMenuOpen( false ) }>
            <Div>
              <P>Contact</P>
              <Span>.</Span>
            </Div>
          </Link>
        </Li>
      </Ul>
      <SocialMedia isOpen={ isOpen }/>
    </Menu>
  );
};
