import styled from 'styled-components';
import { breakpoints } from '../../../../styles';

export const Div = styled.div``;

export const P = styled.p`
  line-height: 1.5em;
  margin-top: 1em;
  max-width: auto;
  font-weight: 300;

  :first-child {
    margin: 0;
  }

  ${ breakpoints.tablet } {
    max-width: 500px;
    font-size: 1.1rem;
  }
`;
