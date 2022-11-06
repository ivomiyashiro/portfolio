import { FigmaLogo, GraphQLLogo, NextLogo, NodeLogo, PostgresqlLogo, ReactLogo, StyledComponentsLogo } from '../../../../components/logos';
import { Div, Wrapper } from './styles';
import { Thumbnail } from './Thumbnail';

import Img1 from '../../../../assets/images/ryutech-ecommerce/ryutech-ecommerce-1.png';
import Img2 from '../../../../assets/images/ryutech-ecommerce/ryutech-ecommerce-2.png';
import Img3 from '../../../../assets/images/ryutech-ecommerce/ryutech-ecommerce-3.png';
import Img4 from '../../../../assets/images/ryutech-ecommerce/ryutech-ecommerce-4.png';
import Img5 from '../../../../assets/images/ryutech-ecommerce/ryutech-ecommerce-5.png';
import Img6 from '../../../../assets/images/ryutech-ecommerce/ryutech-ecommerce-6.png';

import Img7 from '../../../../assets/images/develotter/develotter-1.png';
import Img8 from '../../../../assets/images/develotter/develotter-2.png';
import Img9 from '../../../../assets/images/develotter/develotter-3.png';
import Img10 from '../../../../assets/images/develotter/develotter-4.png';
import Img11 from '../../../../assets/images/develotter/develotter-5.png';
import Img12 from '../../../../assets/images/develotter/develotter-6.png';

import Img13 from '../../../../assets/images/portfolio/portfolio-1.png';
import Img14 from '../../../../assets/images/portfolio/portfolio-2.png';
import Img15 from '../../../../assets/images/portfolio/portfolio-3.png';
import Img16 from '../../../../assets/images/portfolio/portfolio-4.png';
import Img17 from '../../../../assets/images/portfolio/portfolio-5.png';
import Img18 from '../../../../assets/images/portfolio/portfolio-6.png';


export const ProjectThumbnail = ({ activeProject }) => {
  return (
    <Div>
      <Wrapper isActive={ activeProject === 'Ryutech E-commerce' }>
        <Thumbnail
          isActive={ activeProject === 'Ryutech E-commerce' }
          logos={ [
            <ReactLogo width="60px" height="60px" />,
            <NextLogo width="60px" height="60px" fill="black"/>,
            <GraphQLLogo width="60px" height="60px" />
          ] }
          images={ [
            Img1,
            Img2,
            Img3,
            Img4,
            Img5,
            Img6
          ] }
        />
      </Wrapper>
      <Wrapper isActive={ activeProject === 'Develotter' }>
        <Thumbnail
          isActive={ activeProject === 'Develotter' }
          logos={ [
            <ReactLogo width="60px" height="60px" />,
            <NodeLogo width="60px" height="60px" fill="black"/>,
            <PostgresqlLogo width="60px" height="60px" />
          ] }
          images={ [
            Img7,
            Img8,
            Img9,
            Img10,
            Img11,
            Img12
          ] }
        />
      </Wrapper>
      <Wrapper isActive={ activeProject === 'Portfolio' }>
        <Thumbnail
          isActive={ activeProject === 'Portfolio' }
          logos={ [
            <ReactLogo width="60px" height="60px" />,
            <StyledComponentsLogo width="60px" height="60px" fill="black"/>,
            <FigmaLogo width="60px" height="60px" />
          ] }
          images={ [
            Img13,
            Img14,
            Img15,
            Img16,
            Img17,
            Img18
          ] }
        />
      </Wrapper>
    </Div>
  );
};
