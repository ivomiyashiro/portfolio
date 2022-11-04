import styled from 'styled-components';
import { breakpoints } from '../../../../styles';

export const Div = styled.div`
  display: none;

  ${ breakpoints.desktop } {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }
`;


