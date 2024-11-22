import React from 'react';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';

import m1 from '../../assets/m1.png'
import m2 from '../../assets/m2.png'
import m3 from '../../assets/m3.png'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='text-white 
        py-20 grid  grid-cols-12   w-11/12 mx-auto gap-4'>
           
           <div className=' md:col-span-5 col-span-12'>
            <h1 className='text-5xl font-bold'>Cox's bazar</h1>
            <p>
            Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...
            </p>
            <Link to='/booking' className='btn-warning btn'>Booking</Link>
           </div>
           <div className='md:col-span-7 mt-10 md:mt-0 col-span-12 '>
           <Swiper
       // install Swiper modules
       modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
       spaceBetween={50}
       slidesPerView={2}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
       autoplay={{
        delay:1000,
        disableOnInteraction: false
       }}
    >
      <SwiperSlide>
        <img src={m1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={m2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={m3} alt="" />
      </SwiperSlide>
    
    </Swiper>
           </div>
        </div>
    );
};

export default Home;