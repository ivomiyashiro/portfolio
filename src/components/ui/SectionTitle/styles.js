import styled from 'styled-components';

export const Div = styled.div`
  align-items: center;
  display: flex;
  gap: .5em;
  width: 100%;
  margin-top: 0;
`;

export const Wrapper = styled.div`
  background-color: ${ props => props.theme.color_accent_2_dark };
  border-radius: 4px;
  padding: 0.5em 1em;
`;

export const H2 = styled.h2`
  color: ${ props => props.theme.color_text_accent };
  font-size: clamp(24px, 5vw, 26px);
  font-weight: 600;
  white-space: nowrap;
`;

export const Line = styled.div`
  background-color: ${ props => props.theme.color_text_dark };
  height: 1px;
  width: 100%;
`;
