import { A } from './styles';

export const Link = ({ href, target , children }) => {
  return (
    <A href={ href } target={ target }>
      { children }
    </A>
  );
};
