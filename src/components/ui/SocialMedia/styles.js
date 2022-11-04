import styled from 'styled-components';
import { breakpoints } from '../../../styles';

export const Div = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 45px;
  right: auto;
  z-index: 10;
  display: none;

  ${ breakpoints.tablet } {
    display: block;
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 90px;
  background-color: ${ props => props.theme.color_text };
`;

export const Ul = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  justify-content: center;
`;

export const A = styled.a`
  transition: .2s;
  color: ${ props => props.theme.color_text };
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
