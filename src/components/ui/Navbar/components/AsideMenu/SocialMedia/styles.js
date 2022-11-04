import styled, { css } from 'styled-components';
import { breakpoints } from '../../../../../../styles';

const animation = css`
  opacity: 1;
  transition-delay: .4s;
  -webkit-transform: translateY(-60%);
  transform: translateY(-60%);
`;

export const Div = styled.div`
  -webkit-transform: translateY(15px);
  align-items: center;
  bottom: 1em;
  bottom: 90px;
  display: flex;
  gap: 1.5em;
  list-style: none;
  margin: 0;
  opacity: 0;
  padding: 0;
  padding-left: 1.5em;
  position: absolute;
  transform: translateY(15px);
  transition-delay: 0s;
  transition: opacity .3s ease,-webkit-transform .4s cubic-bezier(.694,.048,.335,1);
  transition: opacity .3s ease,transform .4s cubic-bezier(.694,.048,.335,1),-webkit-transform .4s cubic-bezier(.694,.048,.335,1);
  transition: opacity .3s ease,transform .4s cubic-bezier(.694,.048,.335,1);
  width: 100%;
  z-index: 26;

  ${ props => props.isOpen && animation };

  ${ breakpoints.tablet } {
    display: none;
  }
`;
export const A = styled.a`
  color: ${ props => props.theme.color_text };
`;
export const Ul = styled.ul`
  align-items: center;
  display: flex;
  gap: 1.25em;
  list-style: none;
`;

export const Li = styled.li`
  cursor: pointer;
  transition: .2s;

  :hover {
    transform: scale(1.1);
  }
  
  :hover ${ A } {
    color: ${ props => props.theme.color_accent_1 };
    transition: .2s;
  }
`;

export const Line = styled.div`
  background-color: ${ props => props.theme.color_text };
  height: 1px;
  width: 100%;
`;
