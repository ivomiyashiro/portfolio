import { Border, Div, Img } from './styles';
import Me from '../../../../assets/images/ivan-miyashiro.webp';


export const Image = () => {
  return (
    <Div>
      <Img src={ Me } />
      <Border />
    </Div>
  );
};
