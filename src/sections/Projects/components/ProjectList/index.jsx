import { ProjectCard } from '../../../../components';
import { Div } from './styles';

export const ProjectList = ({ activeProject, handleActiveProject }) => {
  return (
    <Div>
      <ProjectCard 
        active={ activeProject === 'Ryutech E-commerce' } 
        title="Ryutech"
        text="An ecommerce crafted with Next JS and GraphQL."
        projectLink="https://ryutech.vercel.app/"
        githubLink="https://github.com/IvoMiyashiro"
        onClick={ () => handleActiveProject('Ryutech E-commerce') }
      />
      <ProjectCard 
        active={ activeProject === 'Develotter' } 
        title="Develotter"
        text="A twitter clone crafted with React, Node and PostgreSQL."
        projectLink="https://ryutech.vercel.app/"
        githubLink="https://github.com/IvoMiyashiro/Develotter"
        onClick={ () => handleActiveProject('Develotter') }
      />
      <ProjectCard 
        active={ activeProject === 'Portfolio' } 
        title="Portfolio"
        text="My personal portfolio crafted with React and Styled Components."
        projectLink="https://ryutech.vercel.app/"
        onClick={ () => handleActiveProject('Portfolio') }
      />
    </Div>
  );
};
