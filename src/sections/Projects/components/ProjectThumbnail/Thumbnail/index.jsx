import { Blackout, Col, Div, Images, Img, Logos, Shadow, Wrapper } from './styles';


export const Thumbnail = ({ logos, images, isActive }) => {
  return (
    <Div>
      <Blackout />
      <Shadow />
      <Logos>
        {
          logos.map((logo, i) => (
            <Wrapper key={ i } active={ isActive }> 
              { logo } 
            </Wrapper>
          ))
        }
      </Logos>
      <Images>
        <Col active={ isActive }>
          {
            images.map((image, i) => {
              if (i % 2 === 0) {
                return (
                  <Img src={ image } key={ i } active={ isActive }/>
                );
              }
            })
          }
        </Col>
        <Col active={ isActive }>
          {
            images.map((image, i) => {
              if (i % 2 !== 0) {
                return (
                  <Img src={ image } key={ i } active={ isActive } />
                );
              }
            })
          }
        </Col>
      </Images>
    </Div>
  );
};
