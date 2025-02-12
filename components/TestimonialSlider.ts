import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { FaQuoteLeft } from 'react-icons/fa';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// testimonial data
import { testimonialData } from '../data/bookTestimonials';

const TestimonialSlider = () => {
  return (
    <div className='swiper-container'>
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
        className="hidden xl:flex"
      >
        {testimonialData.map((person, index) => {
          return (
            <SwiperSlide key={index} className='xl:absolute xl:bottom-0 xl:right-[5%] '>
              <div className="flex flex-col items-center md:flex-row gap-x-8 h-[300px] w-[400px] px-16">
                {/* avatar, name, rating */}
                <div className="flex flex-col xl:justify-center items-center relative xl:bottom-0 mx-auto xl:mx-0">
                  <div className="flex flex-col justify-center text-center">
                    {/* avatar */}
                    <div className="mb-2 mx-auto">
                      <Image
                        src={person.image}
                        width={50}
                        height={50}
                        alt=""
                        className="rounded-full"
                        />
                    </div>
                    {/* name */}
                    <div className="text-lg">{person.name}</div>
                    {/* rating */}
                    <div className="flex flex-row justify-between text-[12px] uppercase font-extralight tracking-widest">
                      {person.rating}
                    </div>
                  </div>
                </div>
                {/* quote & message */}
                <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                  {/* quote icon */}
                  <div className="mb-4">
                    <FaQuoteLeft className="text-lg xl:text-lg text-white/20 mx-auto md:mx-0" />
                  </div>
                  {/* message */}
                  <div className="xl:text-lg text-center md:text-left">
                    {person.message}
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
