import styled, { css } from 'styled-components';
import { breakpoints } from '../../../../../styles';

const before_animation = css`
  transform: translateX(0%);
  transition-delay: 0s;
`;

const after_animation = css`
  transform: translateX(0%);
  transition-delay: .15s;
`;

const ul_animation = css`
  opacity: 1;
  transition-delay: .4s;
  -webkit-transform: translateY(-60%);
  transform: translateY(-60%);
`;

const open_menu = css`
  visibility: visible;
  transition-delay: .1s;
  z-index: 45;
`;

const commun = css`
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transform: translateX(-100%);
  transition: transform .45s cubic-bezier(.694,.048,.335,1),-webkit-transform .45s cubic-bezier(.694,.048,.335,1);
  width: 100%;
  z-index: 9;
`;

export const Menu = styled.menu`
  display: block;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  visibility: hidden;
  transition: all .1s ease .5s;
  ${ props => props.isOpen && open_menu };

  ${ breakpoints.tablet } {
    display: none;
  }

  ::before {
    ${ commun }
    transition-delay: .25s;
    background-color: ${ props => props.theme.color_accent_2 };
    ${ props => props.isOpen && before_animation};
  }
  
  ::after {
    ${ commun }
    transition-delay: .15s;
    background: linear-gradient( 270deg, ${ props => props.theme.color_accent_2_dark} , ${ props => props.theme.color_primary });
    ${ props => props.isOpen && after_animation};
  }
`;

export const P = styled.p`
  font-family: 'Fira Mono';
  font-size: 1.75rem;
  font-weight: 600;
`;

export const Ul = styled.ul`
  -webkit-transform-style: preserve-3d;
  -webkit-transform: translateY(-50%);
  left: 15%;
  list-style: none;
  margin: 0;
  opacity: 0;
  padding: 0;
  position: absolute;
  top: 50%;
  transform-style: preserve-3d;
  transform: translateY(-50%);
  transition: opacity .3s ease,-webkit-transform .4s cubic-bezier(.694,.048,.335,1);
  transition: opacity .3s ease,transform .4s cubic-bezier(.694,.048,.335,1),-webkit-transform .4s cubic-bezier(.694,.048,.335,1);
  transition: opacity .3s ease,transform .4s cubic-bezier(.694,.048,.335,1);
  transition-delay: 0s;
  width: 70%;
  z-index: 10;

  ${ props => props.isOpen && ul_animation};
`;

export const Li = styled.li`
  align-items: center;
  color: ${ props => props.theme.color_text_accent };
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  gap: 1.5em;
  padding: 0.5em 0.25em;
  position: relative;
  transition: .2s;
  z-index: 10;

  :hover {
    color: ${ props => props.theme.color_text_accent };
    transition: .2s;
  }
`;

export const Span = styled.span`
  font-size: 1.5rem;
  color: ${ props => props.theme.color_accent_1 };
`;

export const Div = styled.div`
  align-items: baseline;
  display: flex;
  gap: 0.5em;
  padding: 12px 25px;
`;
