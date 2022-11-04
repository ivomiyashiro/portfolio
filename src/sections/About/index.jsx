import { SectionTitle } from '../../components/ui';
import { Layout, SectionLayout } from '../../styles';
import { Content, Image } from './components';
import { Div } from './styles';

export const About = ({ innerRef, isVisible }) => {
  return (
    <SectionLayout style={ { paddingTop: '0px' } } id="about" ref={ innerRef }>
      <Layout maxWidth="900px" isVisible={ isVisible }>
        <SectionTitle>
          About Me
        </SectionTitle>
        <Div>
          <Content />
          <Image />
        </Div>
      </Layout>
    </SectionLayout>
  );
};
