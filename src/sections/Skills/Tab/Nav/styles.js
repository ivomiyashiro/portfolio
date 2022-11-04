import styled, { css } from 'styled-components';

const activeTab = css`
  border-top: 2px solid ${ props => props.theme.color_accent_1 };
  background-color: ${ props => props.theme.color_background_2};
`;

export const Div = styled.div``;

export const Ul = styled.ul`
  display: flex;
  width: 100%;
`;

export const Li = styled.li`
  border-top: 2px solid ${ props => props.theme.color_accent_2_dark };
  cursor: pointer;
  font-family: 'Fira Mono';
  display: flex;
  justify-content: center;
  font-size: 0.9rem;
  padding: 1em;
  width: 100%;
  ${ props => props.isActive && activeTab }
`;
