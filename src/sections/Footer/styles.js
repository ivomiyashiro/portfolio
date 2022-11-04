import styled from 'styled-components';

export const FooterComponent = styled.footer`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1.5em;
  margin-top: 6em;
`;

export const P = styled.p`
  font-size: 0.8rem;
  font-family: 'Fira Mono';
`;

export const Div = styled.div`
  margin-top: .75em;
  display: flex;
  align-items: center;
  gap: 0.75em;
`;

export const A = styled.a`
  cursor: pointer;
  color: ${ props => props.theme.color_text };
`;
