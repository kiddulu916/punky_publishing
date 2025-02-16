import React from 'react';
import { bookTestimonials } from '../data/bookTestimonials'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { FaQuoteLeft } from 'react-icons/fa';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialSlider = () => {
  return (
    <div className='hidden xl:flex xl:justify-center xl:items-center xl:h-full'>
      <Swiper
        breakPoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="flex justify-center items-center w-full bottom-[180px] right-[50px]"
      >
        {bookTestimonials.map((person, index) => {
          return (
            <SwiperSlide key={index} className='flex justify-center items-center'>
              <div className="flex flex-col items-center md:flex-row gap-x-8 h-[200px] w-[800px] px-16">
                {/* avatar, name, rating */}
                <div className="flex flex-col xl:justify-center items-center relative xl:bottom-[40px] mx-auto xl:mx-0">
                  <div className="flex flex-col justify-center text-center">
                    {/* avatar */}
                    <div className="mb-2 mx-auto">
                      <Image
                        src={person.image}
                        width={50}
                        height={50}
                        alt=""
                        className="rounded-full pt-20"
                      />
                    </div>
                    {/* name */}
                    <div className="text-sm">{person.name}</div>
                    {/* rating */}
                    <div className="flex flex-row justify-between text-[12px] uppercase font-extralight tracking-widest">
                      {person.rating}
                    </div>
                  </div>
                </div>
                {/* quote & message */}
                <div className="flex-1 flex justify-center bottom-[40px] before:w-[3px] border-none xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[140px] relative xl:pl-10 w-full">
                  {/* quote icon */}
                  <div className="mb-4 relative">
                    <FaQuoteLeft className="text-8xl opacity-20 text-white/20 mx-auto md:mx-0 absolute -top-4 -left-4" />
                  </div>
                  {/* message */}
                  <div className="text-sm text-center w-[95%] relative top-10">
                    {person.testimonial}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
