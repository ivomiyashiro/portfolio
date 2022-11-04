import { FigmaLogo, GraphQLLogo, NextLogo, NodeLogo, PostgresqlLogo, ReactLogo, StyledComponentsLogo } from '../../../../components/logos';
import { Div, Wrapper } from './styles';
import { Thumbnail } from './Thumbnail';

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
            'src/assets/images/ryutech-ecommerce/ryutech-ecommerce-1.png',
            'src/assets/images/ryutech-ecommerce/ryutech-ecommerce-2.png',
            'src/assets/images/ryutech-ecommerce/ryutech-ecommerce-3.png',
            'src/assets/images/ryutech-ecommerce/ryutech-ecommerce-4.png',
            'src/assets/images/ryutech-ecommerce/ryutech-ecommerce-5.png',
            'src/assets/images/ryutech-ecommerce/ryutech-ecommerce-6.png',
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
            'src/assets/images/develotter/develotter-1.png',
            'src/assets/images/develotter/develotter-2.png',
            'src/assets/images/develotter/develotter-3.png',
            'src/assets/images/develotter/develotter-4.png',
            'src/assets/images/develotter/develotter-5.png',
            'src/assets/images/develotter/develotter-6.png',
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
            'src/assets/images/portfolio/portfolio-1.png',
            'src/assets/images/portfolio/portfolio-2.png',
            'src/assets/images/portfolio/portfolio-3.png',
            'src/assets/images/portfolio/portfolio-4.png',
            'src/assets/images/portfolio/portfolio-5.png',
            'src/assets/images/portfolio/portfolio-6.png',
          ] }
        />
      </Wrapper>
    </Div>
  );
};
