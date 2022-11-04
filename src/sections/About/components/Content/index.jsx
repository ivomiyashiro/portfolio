import { Link } from '../../../../components/ui';
import { Div, P } from './styles';

export const Content = () => {
  return (
    <Div>
      <P> 
        Hello! I’m a passionate software developer who loves coding to solve problems. Since I was a kid I’ve been interested in technology and programming. Nowadays, I’m studying for Informatic Technology Management Degree at <Link href="https://www.uade.edu.ar/facultad-de-ingenieria-y-ciencias-exactas/licenciatura-en-gestion-de-tecnologia-de-la-informacion/" target="_blank"> UADE</Link> and I have experience working with javascript libraries and frameworks like React JS and Node JS.
      </P>
      <P>My main focus these days is to help people and organizations to solve their problems using code as a tool. I’m always looking to have a clean and readable code to facilitate the scalability of my applications.</P>
      <P>Currently, I’m working at <Link href="https://www.ryutech.cl/" target="_blank" >Ryutech</Link> as a web developer, however I’m always open to talk about any kind of opportunity that suits my interest.</P>
    </Div>
  );
};
