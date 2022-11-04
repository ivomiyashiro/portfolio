import styled, { css } from 'styled-components';
import { breakpoints } from '../../../styles';

const active = css`
  border: 1px solid ${ props => props.theme.color_accent_2 };
  background-color: #132F4C;
  transition: .3s;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transition: .3s;
  padding: 1.25em;
  cursor: pointer;
  ${ props => props.active && active }

  ${ breakpoints.desktop } {
    min-width: 400px;
    flex-direction: row;
    gap: 1em;

    :hover {
      background-color: ${ props => props.active ? '#132F4C' : '#001E3C' };
    }
  }
`;

export const IconWrapper = styled.div`
  padding: 0.25em 0;
`;

export const H3 = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${ props => props.theme.color_text_accent };
  margin-top: 0.5em;
`;

export const P = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  margin: 0.5em 0;
  margin-bottom: 1em;
  line-height: 1.4em;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 0.5em;
`;

export const A = styled.a`
  color: ${ props => props.theme.color_text };
`;
