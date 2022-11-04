import styled from 'styled-components';

export const Button = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: 10px;
  border: none;
  border: 1px solid ${ props => props.theme.color_accent_2_dark };
  color: ${ props => props.theme.color_accent_2 };
  cursor: pointer;
  display: flex;
  font-family: 'Fira Mono';
  font-size: 1rem;
  justify-content: center;
  padding: 0.65em 0.75em;

  :hover {
    background-color: rgba(19, 47, 76, 0.4);
  }
`;
