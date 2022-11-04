import { useState } from 'react';

import { SectionTitle } from '../../components';
import { ProjectSwiper, ProjectThumbnail, ProjectList } from './components';

import { Layout, SectionLayout } from '../../styles';
import { Div, Wrapper } from './styles';

export const Projects = ({ innerRef, isVisible }) => {

  const [activeProject, setActiveProject] = useState('Ryutech E-commerce');

  return (
    <SectionLayout id='projects' ref={ innerRef }>
      <Layout maxWidth="1000px" isVisible={ isVisible }>
        <SectionTitle>
          Built Projects
        </SectionTitle>
        <Div>
          <ProjectSwiper handleActiveProject={ setActiveProject } />
        </Div>
      </Layout>
      <Wrapper>
        <ProjectList activeProject={ activeProject } handleActiveProject={ setActiveProject } />
        <ProjectThumbnail activeProject={ activeProject } />
      </Wrapper>
    </SectionLayout>

  );
};
