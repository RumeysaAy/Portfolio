import React from 'react';
import "./testimonials.css";
import Image1 from "../../assets/avatar-1.svg";
import Image2 from "../../assets/avatar-3.svg";
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    image: Image1,
    title: "John Doe",
    subtitle: "Dribble'da ürün tasarımcısı",
    comment:
      "Tasarım konusunda gerçekten çok başarılı! 👍",
  },
  {
    id: 2,
    image: Image2,
    title: "John Doe",
    subtitle: "Dribble'da ürün tasarımcısı",
    comment:
      "Tasarım konusunda gerçekten çok başarılı! 👍",
  },
];

const Testimonials = () => {
  return (
    <section className='testimonials container section'>
      <h2 className='section__title'>Müşteriler & İncelemeler</h2>

      <Swiper className='testimonials_container grid'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      grabCursor={true}
      pagination={{ clickable: true }}
      >
        {data.map(({id, image, title, subtitle, comment}) =>{
          return(
            <SwiperSlide className='testimonial_item' key={id}>
              <div className='thumb'>
                <img src={image} alt='' />
              </div>
              <h3 className='testimonials_title'>{title}</h3>
              <span className='subtitle'>{subtitle}</span>
              <div className='comment'>{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials