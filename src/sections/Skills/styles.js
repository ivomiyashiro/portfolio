import styled from 'styled-components';
import { breakpoints } from '../../styles';

export const P = styled.p`
  line-height: 1.5em;
  margin-bottom: 1.5em;
  max-width: auto;
  margin-top: 2em;
  font-weight: 300;

  :first-child {
    margin: 0;
  }

  ${ breakpoints.tablet } {
    font-size: 1.1rem;
  }
`;
