import { useState, useEffect } from 'react';

import { Title, Text, Buttons } from './components';

import { Layout } from '../../styles';
import { Container, Section, Wrapper } from './styles';

export const Hero = () => {

  const [textVisible, setTextVisible] = useState(false);
  const [buttonsVisible, setButtonsVisibles] = useState(false);

  useEffect(() => {

    const animationInt_1 = setInterval(() => {
      setTextVisible(true);
    }, [1000]);

    const animationInt_2 = setInterval(() => {
      setButtonsVisibles(true);
    }, [1500]);

    return () => {
      clearInterval(animationInt_1);
      clearInterval(animationInt_2);
    };
  }, []);
  

  return (
    <Section id='hero'>
      <Layout maxWidth="1000px" isVisible>
        <Container>
          <Wrapper>
            {
              textVisible && (
                <div className='animate__animated animate__fadeInUp'>
                  <Title isVisible={ textVisible } />
                  <Text isVisible={ textVisible } />
                </div>
              )
            }
            <Buttons isVisible={ buttonsVisible } />
          </Wrapper>
        </Container>
      </Layout>
    </Section>
  );
};
