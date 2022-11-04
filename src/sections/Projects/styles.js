import styled from 'styled-components';
import { breakpoints } from '../../styles';

export const Div = styled.div`
  margin-top: 2em;

  ${ breakpoints.desktop } {
    display: none;
  }
`;

export const Wrapper = styled.div`
  ${ breakpoints.desktop } {
    box-sizing: border-box;
    display: flex;
    gap: 2em;
    margin: 2em auto;
    max-width: 1000px;
    padding: 0em 1.5em;
    width: 75%;
  }
`;
