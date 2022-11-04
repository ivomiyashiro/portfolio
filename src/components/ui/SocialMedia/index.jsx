import { useEffect, useState } from 'react';
import { LinkedinIcon, GithubIcon, InstagramIcon, MailIcon } from '../../icons';
import { A, Div, Li, Line, Ul } from './styles';

export const SocialMedia = () => {

  const [link1, setLink1] = useState(false);
  const [link2, setLink2] = useState(false);
  const [link3, setLink3] = useState(false);
  const [link4, setLink4] = useState(false);

  useEffect(() => {
    const animation1 = setInterval(() => {
      setLink1(true);
    }, [500]);
    const animation2 = setInterval(() => {
      setLink2(true);
    }, [600]);
    const animation3 = setInterval(() => {
      setLink3(true);
    }, [700]);
    const animation4 = setInterval(() => {
      setLink4(true);
    }, [800]);
    return () => {
      clearInterval(animation1);
      clearInterval(animation2);
      clearInterval(animation3);
      clearInterval(animation4);
    };
  }, []);

  return (
    <Div>
      <Ul>
        {
          link4 && (
            <Li className="animate__animated animate__zoomIn">
              <A href='https://github.com/IvoMiyashiro' target='_blank'>
                <GithubIcon height={ 20 } width={ 20 } />
              </A>
            </Li>
          )
        }
        {
          link3 && (
            <Li className="animate__animated animate__zoomIn">
              <A href='https://www.linkedin.com/in/ivanmiyashiro/' target='_blank'>
                <LinkedinIcon height={ 20 } width={ 20 } />
              </A>
            </Li>
          )
        }
        {
          link2 && (
            <Li className="animate__animated animate__zoomIn">
              <A href='https://www.instagram.com/ivomiyashiro/' target='_blank'>
                <InstagramIcon height={ 20 } width={ 20 } />
              </A>
            </Li>
          )
        }
        {
          link1 && (
            <Li className="animate__animated animate__zoomIn">
              <A href = "mailto: ivo.miyashiro1@gmail.com">
                <MailIcon height={ 20 } width={ 20 } />
              </A>
            </Li>
          )
        }
        <Li>
          <Line />
        </Li>
      </Ul>
    </Div>
  );
};
