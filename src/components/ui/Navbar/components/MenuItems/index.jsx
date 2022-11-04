import { Link } from 'react-scroll';
import { useMenuItems } from '../../../../../hooks';
import { ButtonComponent } from '../../../Button';
import { Li, P, Ul, Underline } from './styles';

export const MenuItems = () => {

  const { link1, link2, link3, link4, link5 } = useMenuItems();

  return (
    <Ul>
      {
        link5 && (
          <Li className="animate__animated animate__zoomIn">
            <Link to='about' smooth offset={ -160 } > 
              <P> About </P>
              <Underline />
            </Link>
          </Li>
        )
      }
      {
        link4 && (
          <Li className="animate__animated animate__zoomIn">
            <Link to='experience' smooth offset={ -30 }> 
              <P> Experience </P>
              <Underline />
            </Link>
          </Li>
        )
      }
      {
        link3 && (
          <Li className="animate__animated animate__zoomIn">
            <Link to='skills' smooth offset={ -10 }> 
              <P> Skills </P>
              <Underline />
            </Link>
          </Li>
        )
      }
      {
        link2 && (
          <Li className="animate__animated animate__zoomIn">
            <Link to='projects' smooth offset={ -10 }> 
              <P> Projects </P>
              <Underline />
            </Link>
          </Li>
        )
      }
      {
        link1 && (
          <Li className="animate__animated animate__zoomIn">
            <Link to='contact' smooth offset={ -160 }>
              <ButtonComponent>
                Contact
              </ButtonComponent>
            </Link>
          </Li> 
        )
      }
    </Ul>
  );
};
