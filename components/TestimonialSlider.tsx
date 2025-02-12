import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SwiperNavigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaQuoteLeft } from 'react-icons/fa';
import '../styles/globals.css';

// testimonial data
import { bookTestimonials } from '../lib/bookTestimonials';

// Define the type for a single testimonial
interface Testimonial {
  name: string;
  image: string;
  rating: number;
  testimonial: string;
}

// Define the props for the TestimonialSlider component
interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const TestimonialSlider: FC<TestimonialSliderProps> = ({ testimonials = bookTestimonials }) => {
  return (
    <div className="mt-4 mb-8">
      <h2 className="text-2xl text-center font-semibold mb-4">What Readers Say</h2>
      <Swiper
        modules={[SwiperNavigation, Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
        freeMode={true}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="testimonial-slider max-w-[800px] mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="py-4">
            <div className="flex flex-col md:flex-row items-center p-6 bg-secondary rounded-lg shadow-md">
              {/* Left side - Photo and Details */}
              <div className="flex flex-col items-center md:w-1/4 mb-4 md:mb-0">
                <div className="relative w-16 h-16 mb-2">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover text-white rounded-full"
                  />
                </div>
                <h3 className="font-semibold items-center text-center text-white">{testimonial.name}</h3>
                <div className="flex gap-1 mt-2">
                  {testimonial.rating}
                </div>
              </div>

              {/* Divider */}
              <div className="w-[2px] bg-white opacity-50 mx-4 h-full"></div>

              {/* Right side - Testimonial */}
              <div className="w-2/3 items-center relative">
                <FaQuoteLeft className="absolute top-0 left-0 opacity-10 z-0" />
                <p className="text-white text-sm relative z-10">{testimonial.testimonial}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
