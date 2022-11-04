import { Div, P, Wrapper } from './styles';

export const Card = ({ name, icon }) => {
  return (
    <Div>
      { icon }
      <Wrapper>
        <P>{ name }</P>
      </Wrapper>
    </Div>
  );
};
