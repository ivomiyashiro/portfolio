import styled from 'styled-components';
import { breakpoints } from '../../../../styles';

export const Div = styled.div`
  padding: 1.5em;
  background-color: ${ props => props.theme.color_background_2 };
  min-height: 413px;

  ${ breakpoints.tablet } {
    padding: 2em;
  }
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 80px);
  align-content: center;
  justify-content: space-between;
  gap: 1.5em;

  ${ breakpoints.tablet } {
    grid-template-columns: repeat(auto-fill, minmax(80px, 100px));
  }
`;

export const Li = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
