import styled from 'styled-components';
import { breakpoints, defaultTheme } from '../../../styles';

export const Header = styled.header`
  align-items: center;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px -10px ${ props => props.isWindowOnTop ? 'transparent' : props.theme.color_navbar_shadow} ;
  display: flex;
  height: 80px;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 99;
  transform: translateY(${ props => props.visible ? '0%' : '-100%'});
  transition: transform .25s ;

  ${ breakpoints.tablet } {
    height: 70px;
  }
`;

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 0.75em 1.5em;

  ${ breakpoints.tablet } {
    padding: 0.75em 3em;
  }
`;

export const H1 = styled.h1`
  font-size: 2rem;
  color: ${ defaultTheme.color_text_accent };
  font-weight: 700;
  position: relative;
  left: 0;
  z-index: 100;

  ${ breakpoints.tablet } {
    font-size: 2.5rem;
  }
`;

export const Div = styled.div`
  cursor: pointer;
`;

export const Wrapper = styled.div`
  position: relative;
  left: 0;
  z-index: 100;

  ${ breakpoints.tablet } {
    display: none;
  }
`;

export const Span = styled.span`
  color: ${props => props.theme.color_accent_2};
`;
