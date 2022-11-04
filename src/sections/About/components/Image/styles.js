import styled from 'styled-components';
import { breakpoints } from '../../../../styles';

export const Div = styled.div`
  align-items: center;
  border-radius: 8px;
  display: flex;
  height: 250px;
  justify-content: center;
  position: relative;
  width: 250px;
  margin: 0 auto;

  ${ breakpoints.tablet } {
    width: 300px;
    height: 300px;
  }
`;

export const Border = styled.div`
  border-radius: 6px;
  border: 2px solid ${props => props.theme.color_accent_1 };
  height: 250px;
  left: 12px;
  position: absolute;
  top: 12px;
  width: 250px;
  z-index: 0;

  ${ breakpoints.tablet } {
    width: 100%;
    height: 300px;
  }
`;

export const Img = styled.img`
  border-radius: 6px;
  filter: grayscale(100%);
  height: 250px;
  object-fit: cover;
  position: absolute;
  width: 250px;
  z-index: 9;
  transition: filter .2s;

  :hover {
    filter: grayscale(0%);
    transition: filter .2s;
  }

  ${ breakpoints.tablet } {
    width: 100%;
    height: 300px;
  }
`;
