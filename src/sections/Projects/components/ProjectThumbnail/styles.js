import styled from 'styled-components';
import { breakpoints } from '../../../../styles';

export const Div = styled.div`
  height: 300px;
  margin-top: 2em;
  position: relative;
  width: 100%;

  ${ breakpoints.desktop } {
    height: auto;
    margin-top: 0;
  }
`;

export const Wrapper = styled.div`
  display: block;
  height: 300px;
  position: absolute;
  top: 0;
  width: 100%;
  opacity: ${ props => props.isActive ? '1' : '0' };
  transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  ${ breakpoints.desktop } {
    height: 100%;
    width: 60vw;
  }
`;

