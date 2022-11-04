import { Div, H2, Line, Wrapper } from './styles';

export const SectionTitle = ({ children }) => {
  return (
    <Div>
      <Wrapper>
        <H2>{ children }</H2>
      </Wrapper>
      <Line />
    </Div>
  );
};
