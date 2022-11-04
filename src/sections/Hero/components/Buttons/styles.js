import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  gap: 1em;
`;

export const Button = styled.a`
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
  padding: 0.65em;
  position: relative;
  width: 135px;
  transition: .2s;

  :hover {
    background-color: ${ props => props.secondary ? props.theme.color_button_secondary_hover : props.theme.color_button_primary_hover };
    transition: .2s;
  }
`;
