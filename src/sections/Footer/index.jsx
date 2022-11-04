import { GithubIcon, LinkedinIcon, InstagramIcon, MailIcon } from '../../components/icons';
import { A, Div, FooterComponent, P } from './styles';

export const Footer = () => {
  return (
    <FooterComponent>
      <P>Design & Crafted by Ivan Miyashiro</P>
      <Div>
        <A href='https://github.com/IvoMiyashiro' target='_blank'><GithubIcon width="16px" height="16px" /></A>
        <A href='https://www.linkedin.com/in/ivanmiyashiro/' target='_blank'><LinkedinIcon width="16px" height="16px" /></A>
        <A href='https://www.instagram.com/ivomiyashiro/' target='_blank'><InstagramIcon width="16px" height="16px" /></A>
        <A href = "mailto: ivo.miyashiro1@gmail.com"  ><MailIcon width="16px" height="16px" /></A>
      </Div>
    </FooterComponent>
  );
};
