import { Swiper, SwiperSlide } from 'swiper/react';

import { ProjectCard } from '../../../../components';

import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

export const ProjectSwiper = ({ handleActiveProject }) => {
  return (
    <>
      <Swiper
        slidesPerView={ 'auto' }
        spaceBetween={ 30 }
        pagination={ {
          clickable: true,
        } }
        className="mySwiper"
      >
        <SwiperSlide>
          {
            ({ isActive }) => {
              isActive && handleActiveProject('Ryutech E-commerce');
              return ( 
                <ProjectCard 
                  active={ isActive } 
                  title="Ryutech E-commerce"
                  text="An ecommerce crafted with Next JS and GraphQL."
                  projectLink="https://ryutech.vercel.app/"
                  onClick={ () => handleActiveProject('Ryutech E-commerce') }
                />
              ); 
            }
          }
        </SwiperSlide>
        <SwiperSlide>
          {
            ({ isActive }) => {
              isActive && handleActiveProject('Online Store');
              return (
                <ProjectCard 
                  active={ isActive } 
                  title="Online Store"
                  text="An ecommerce crafted with React, Node and MongoDB."
                  projectLink="https://ryutech.vercel.app/"
                  onClick={ () => handleActiveProject('Online Store') }
                />
              ); 
            }
          }
        </SwiperSlide>
        <SwiperSlide>
          {
            ({ isActive }) => {
              isActive && handleActiveProject('Develotter');
              return (
                <ProjectCard 
                  active={ isActive } 
                  title="Develotter"
                  text="A twitter clone crafted with React, Node and PostgreSQL."
                  projectLink="https://ryutech.vercel.app/"
                  onClick={ () => handleActiveProject('Develotter') }
                />
              );
            }
          }
        </SwiperSlide>
        <SwiperSlide>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
