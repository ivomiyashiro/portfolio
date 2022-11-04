import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-scroll';
import { ArrowLeftIcon } from '../../../../components/icons';
import { Button, Div } from './styles';

export const Buttons = ({ isVisible }) => {

  const [buttonOffset, setButtonOffset] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < '499') {
        setButtonOffset(-100);
      } else {
        setButtonOffset(-160);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {
        isVisible && (
          <Div className='animate__animated animate__fadeIn'>
            <Button href='https://drive.google.com/file/d/1tOpRdZv_pgjJK-jVK5_Tqf-HJTTDK1Gi/view' target="_blank">
              Get Resume
            </Button>
            <Link to='about' smooth offset={ buttonOffset }>
              <Button secondary>
                About me
                <ArrowLeftIcon size={ 18 }/>
              </Button>
            </Link>
          </Div>
        )
      }
    </>
  );
};
