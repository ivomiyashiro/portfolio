import styled from 'styled-components';
import { breakpoints } from '../../../../../styles';

export const Ul = styled.ul`
  align-items: center;
  display: none;
  gap: 2.5em;

  ${ breakpoints.tablet } {
    display: flex;
  }
`;
export const Underline = styled.span`
  background-color: ${ props => props.theme.color_accent_1 };
  bottom: 0;
  height: 3px;
  position: absolute;
  transition: width .2s;
  width: 0px;
`;

export const Li = styled.li`
  cursor: pointer;
  transition: color .2s;
  padding: 0.5em 0;
  position: relative;

  :hover {
    color: ${ props => props.theme.color_text_accent };
    transition: color .2s;

    ${Underline} {
      width: 100%;
    }
  }
`;

export const P = styled.p`
  font-family: 'Fira Mono';
  font-size: 1rem;
  font-weight: 600;
`;
