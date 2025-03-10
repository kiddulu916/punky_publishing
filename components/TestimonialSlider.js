import React from 'react';
import { bookTestimonials } from '../data/bookTestimonials'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { FaQuoteLeft } from 'react-icons/fa';

// Import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialSlider = () => {
  return (
    <div className='flex justify-center items-center h-full relative z-50'>
      {/* Added 'relative' class to parent container to ensure proper positioning context */}
      <Swiper
        // Corrected breakpoints property name (was breakPoints)
        breakpoints={{
          1200: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        // Set freeMode to false for more predictable navigation behavior
        freeMode={false}
        // Explicitly configure navigation with custom options
        navigation={{
          enabled: true,
          // Adding these classes ensures the navigation arrows are properly visible and clickable
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="flex justify-center items-center w-[700px]"
      >
        {bookTestimonials.map((person, index) => {
          return (
            <SwiperSlide key={index} className='flex justify-center items-center'>
              <div className="flex flex-col items-center md:flex-row gap-x-8 h-[200px] px-16">
                {/* Avatar, name, rating */}
                <div className="flex flex-col xl:justify-center items-center relative xl:bottom-[40px] mx-auto xl:mx-0">
                  <div className="flex flex-col justify-center text-center">
                    {/* Avatar */}
                    <div className="mb-2 mx-auto">
                      <Image
                        src={person.image}
                        width={50}
                        height={50}
                        alt={`${person.name}'s avatar`}
                        className="rounded-full pt-20"
                      />
                    </div>
                    {/* Name */}
                    <div className="text-sm">{person.name}</div>
                    {/* Rating */}
                    <div className="flex flex-row justify-between text-[12px] uppercase font-extralight tracking-widest">
                      {person.rating}
                    </div>
                  </div>
                </div>
                {/* Quote & message */}
                <div className="flex-1 flex justify-center bottom-[40px] before:w-[3px] border-none xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[140px] relative xl:pl-10 w-full">
                  {/* Quote icon */}
                  <div className="mb-4 relative">
                    <FaQuoteLeft className="text-8xl opacity-20 text-white/20 mx-auto md:mx-0 absolute -top-4 -left-4" />
                  </div>
                  {/* Message */}
                  <div className="text-sm text-center w-[95%] relative top-10">
                    {person.testimonial}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        
        {/* Adding custom navigation elements to ensure they're clickable */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;