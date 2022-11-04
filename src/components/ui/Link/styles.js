import styled from 'styled-components';

export const A = styled.a`
  color: ${ props => props.theme.color_accent_1 };
  text-decoration: none;
  position: relative;

  :hover {
    ::before {
      width: 100%;
      transition: 0.1s;
    }
  }

  ::before {
    content: "";
    position: absolute;
    width: 0;
    height: 1px;
    background-color: ${ props => props.theme.color_accent_1 };
    bottom: 0;
    transition: 0.1s;
  }
`;
