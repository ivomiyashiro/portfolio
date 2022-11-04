import styled from 'styled-components';

export const Div = styled.div``;

export const Ul = styled.ul`
  position: relative;

  ::before {
    content: " ";
    background-color: ${ props => props.theme.color_text_dark };
    display: inline-block;
    position: absolute;
    left: 7px;
    width: 1px;
    top: 8px;
    height: 100%;
    z-index: 1;
  }
`;

export const Li = styled.li`
  margin: 2em 0px;
  padding-left: 2em;

  ::before {
    content: " ";
    background: ${ props => props.theme.color_background_1 };
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 2px solid ${ props => props.theme.color_accent_2 };
    left: 0;
    width: 12px;
    height: 12px;
    margin-top: 6.5px;
    z-index: 2;
  }
`;

export const A = styled.a`
  color: ${ props => props.theme.color_accent_1 };
  font-size: 1.25rem;
  font-weight: 500;
  position: relative;
  text-decoration: none;

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

export const Wrapper = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
`;

export const H3 = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${ props => props.theme.color_text_accent };
`;

export const Span = styled.span`
  color: ${ props => props.theme.color_accent_1 };
  font-size: 1.25rem;
  font-weight: 500;
`;

export const Date = styled.p`
  font-size: 0.9rem;
  margin-top: 0.5em;
  font-family: 'Fira Mono';
  margin-left: 0.1em;
`;

export const P = styled.p``;

export const List = styled.ul`
  margin-top: 1.15em;
`;

export const ListItem = styled.li`
    position: relative;
    padding-left: 1.5em;
    margin-bottom: 1em;
    font-weight: 300;

  ::before {
    content: "▹";
    position: absolute;
    font-size: 0.8rem;
    left: 0px;
    top: 1px;
    color: ${ props => props.theme.color_accent_1 };
  }
`;
