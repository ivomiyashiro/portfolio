import { useRef } from 'react';

import 'animate.css';
import styled from 'styled-components';

import { useSection } from './hooks';
import { Navbar, SocialMedia } from './components';
import { Hero, About, Experience, Skills, Projects, Contact, Footer } from './sections';

function App() {

  const aboutRef = useRef(null);
  const expRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const {
    isAboutVisible,
    isExperienceVisible,
    isSkillsVisible,
    isProjectsVisible,
    isContactVisible
  } = useSection({ aboutRef, expRef, skillsRef, projectRef, contactRef });

  return (
    <>
      <Navbar />
      <Div>
        <Hero />
        <About innerRef={ aboutRef } isVisible={ isAboutVisible } />
        <Experience innerRef={ expRef } isVisible={ isExperienceVisible } />
        <Skills innerRef={ skillsRef } isVisible={ isSkillsVisible } />
        <Projects innerRef={ projectRef } isVisible={ isProjectsVisible } />
        <Contact innerRef={ contactRef } isVisible={ isContactVisible } />
        <Footer />
      </Div>
      <SocialMedia />
    </>
  );
}

export default App;

const Div = styled.div`
  overflow: hidden;
`;
