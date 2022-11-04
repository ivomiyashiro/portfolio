import { defaultTheme } from '../../../styles';
import { GithubIcon, LinkIcon, ProjectIcon } from '../../icons';
import { A, Div, H3, IconWrapper, P, Wrapper } from './styles';

export const ProjectCard = ({ active, title, text, githubLink, projectLink, onClick }) => {

  const color = active ? defaultTheme.color_accent_1 : defaultTheme.color_text;

  return (
    <Div active={ active } onClick={ onClick }>
      <IconWrapper>
        <ProjectIcon width="30px" height="30px" fill={ color } />
      </IconWrapper>
      <div>
        <div>
          <H3>{ title }</H3>
          <P>{ text } </P>
        </div>
        <Wrapper>
          <A href={ githubLink } target="_blank">
            <GithubIcon width="18px" height="18px" />
          </A>
          <A href={ projectLink } target="_blank">
            <LinkIcon width="18px" height="18px" />
          </A>
        </Wrapper>
      </div>
    </Div>
  );
};
