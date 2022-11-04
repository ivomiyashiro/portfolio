import styled from 'styled-components';
import { breakpoints } from '../../styles';

export const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3em;
  margin-top: 2em;
`;

export const P = styled.p`
  line-height: 1.5em;
  margin-bottom: 1.5em;
  max-width: auto;
  text-align: center;
  font-weight: 300;

  :first-child {
    margin: 0;
  }

  ${ breakpoints.tablet } {
    font-size: 1.1rem;
  }
`;

export const A = styled.a`
  align-items: center;
  text-decoration: none;
  background-color: ${ props => props.secondary ? 'transparent' : props.theme.color_button_primary };
  border-radius: 4px;
  border: none;
  border: 1px solid ${ props => props.theme.color_accent_2_dark };
  color: ${ props => props.secondary ? props.theme.color_accent_2 : props.theme.color_text_accent };
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  gap: 0.5em;
  justify-content: center;
  padding: 1em;
  position: relative;
  width: 150px;
  transition: .2s;

  :hover {
    background-color: ${ props => props.secondary ? props.theme.color_button_secondary_hover : props.theme.color_button_primary_hover };
    transition: .2s;
  }
`;
