
import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon } from '../../../../../icons';
import { A, Div, Li, Line, Ul } from './styles';

export const SocialMedia = ({ isOpen }) => {
  return (
    <Div isOpen={ isOpen }>
      <Ul>
        <Li>
          <A href='https://github.com/IvoMiyashiro' target='_blank'>
            <GithubIcon height={ 20 } width={ 20 } />
          </A>
        </Li>
        <Li>
          <A href='https://www.linkedin.com/in/ivanmiyashiro/' target='_blank'>
            <LinkedinIcon height={ 20 } width={ 20 } />
          </A>
        </Li>
        <Li>
          <A >
            <InstagramIcon height={ 20 } width={ 20 } />
          </A>
        </Li>
        <Li>
          <A href = "mailto: ivo.miyashiro1@gmail.com">
            <MailIcon height={ 20 } width={ 20 } />
          </A>
        </Li>
      </Ul>
      <Line />
    </Div>
  );
};
