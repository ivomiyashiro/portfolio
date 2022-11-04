import styled, { css } from 'styled-components';
import { breakpoints } from '../base';

const visible_animation = css`
  opacity: 1;
  transform: translate(0);
  transition: 1s;
`;

export const Layout = styled.div`
  max-width: ${ props => props.maxWidth };
  margin: 0 auto;
  padding: 0em 1.5em;
  opacity: 0;
  transform: translateY(40px);
  transition: 1s;
  ${ props => props.isVisible && visible_animation };

  ${ breakpoints.tablet } {
    width: 75%;
  }
`;

export const SectionLayout = styled.section`
  padding: 60px 0;
  position: relative;

  ${ breakpoints.tablet } {
    padding: 100px 0;
  }
`;
