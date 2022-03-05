import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper';

export function Recommended() {
  return (
    <>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        pagination
        modules={[EffectCoverflow]}
      >
        <SwiperSlide>
          <img style={{ width: '100%' }} alt="a" src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="a" style={{ width: '100%' }} src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="a" style={{ width: '100%' }} src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
