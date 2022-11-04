import styled from 'styled-components';
import { breakpoints } from '../../../../styles';

export const Span = styled.span`
  color: ${props => props.theme.color_accent_1};
  font-weight: 300;
`;

export const P = styled.p`
  margin-top: 1em;
  margin-bottom: 3em;
  line-height: 1.5em;
  font-weight: 300;

  ${ breakpoints.tablet } {
    max-width: 550px;
    font-size: 1.05rem;
  }
`;
