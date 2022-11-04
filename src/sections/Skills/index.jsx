import { Layout, SectionLayout } from '../../styles';
import { SectionTitle } from '../../components';
import { Tab } from './Tab';
import { P } from './styles';

export const Skills = ({ innerRef, isVisible }) => {
  return (
    <SectionLayout id='skills' ref={ innerRef }>
      <Layout maxWidth="900px" isVisible={ isVisible }>
        <SectionTitle>
          Techs & Skills
        </SectionTitle>
        <P>I'm always in constant learning to improve my current skills and acquire new ones. Here is a list of the technologies I've been working with recently.</P>
        <Tab />
      </Layout>
    </SectionLayout>
  );
};
