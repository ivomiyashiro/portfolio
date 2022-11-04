import { useEffect, useState } from 'react';

export const useSection = ({ aboutRef, expRef, skillsRef, projectRef, contactRef }) => {
  const [isAboutVisible, setAboutVisible] = useState(false);
  const [isExperienceVisible, setExperienceVisible] = useState(false);
  const [isSkillsVisible, setSkillsVisible] = useState(false);
  const [isProjectsVisible, setProjectsVisible] = useState(false);
  const [isContactVisible, setContactVisible] = useState(false);
  const OFFSET = 300;

  useEffect(() => {
    const handleShowSection = () => {
      const aboutSectionPosition = aboutRef.current?.getBoundingClientRect().top;
      const expSectionPosition = expRef.current?.getBoundingClientRect().top;
      const skillsSectionPosition = skillsRef.current?.getBoundingClientRect().top;
      const projectsSectionPosition = projectRef.current?.getBoundingClientRect().top;
      const contactSectionPosition = contactRef.current?.getBoundingClientRect().top;
      const windowPosition = window.innerHeight;

      if (aboutSectionPosition + OFFSET < windowPosition) {
        setAboutVisible(true);
      }

      if (expSectionPosition + OFFSET < windowPosition) {
        setExperienceVisible(true);
      }

      if (skillsSectionPosition + OFFSET < windowPosition) {
        setSkillsVisible(true);
      }

      if (projectsSectionPosition + OFFSET < windowPosition) {
        setProjectsVisible(true);
      }

      if (contactSectionPosition + OFFSET < windowPosition) {
        setContactVisible(true);
      }
    };

    window.addEventListener('scroll', handleShowSection);
  }, [aboutRef, expRef, skillsRef, projectRef, contactRef]);

  return {
    isAboutVisible,
    isExperienceVisible,
    isSkillsVisible,
    isProjectsVisible,
    isContactVisible
  };
};
