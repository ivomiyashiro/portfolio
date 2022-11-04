import styled from 'styled-components';

export const Div = styled.div`
  margin: 0.5em 0;
`;

export const H1 = styled.h1`
  font-size: clamp(40px, 8vw, 60px);
  font-weight: 800;
  letter-spacing: 0.03em;
  color: ${props => props.theme.color_text_accent};
`;

export const Span = styled.span`
  color: ${ props => props.theme.color_accent_1 };
  font-size: 1.05rem;
  font-family: 'Fira Mono';
`;

export const H2 = styled.h2`
  font-size: clamp(40px, 8vw, 60px);
  font-weight: 800;
  letter-spacing: 0.03em;
  color: ${props => props.theme.color_text };
`;
