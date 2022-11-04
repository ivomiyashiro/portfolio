import { Title } from './Title';
import { ArrowLeftIcon } from '../../components/icons';
import { Layout, SectionLayout } from '../../styles';
import { P, A, Div } from './styles';

export const Contact = ({ innerRef, isVisible }) => {
  return (
    <SectionLayout id='contact' ref={ innerRef }>
      <Layout maxWidth="700px" isVisible={ isVisible }>
        <Title />
        <Div>
          <P>If you're interested in what I do and would like to work with me, contact me through my email or any social media and I'll answer your message as soon as possible!</P>
          <A secondary href = "mailto: ivo.miyashiro1@gmail.com">
            Send Email
            <ArrowLeftIcon size={ 18 }/>
          </A>
        </Div>
      </Layout>
    </SectionLayout>
  );
};
