import styled from 'styled-components';
import { breakpoints } from '../../styles';

export const Div = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 3em;
  gap: 3.5em;

  ${ breakpoints.tablet } {
    flex-direction: row;
  }
`;
