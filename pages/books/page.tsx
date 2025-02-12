// Import necessary components and libraries
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SwiperNavigation, Pagination } from 'swiper/modules';
import { FaAmazon } from 'react-icons/fa';
import { BooksPageProps } from '../../types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BooksPage: FC<BooksPageProps> = ({ book, testimonials = [] }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section - Book Cover and Amazon Link */}
        <div className="md:w-1/3 flex flex-col items-center">
          <div className="relative top-[65px] left-[30px] mx-0 my-0 w-full aspect-[3/4] max-w-md">
            <Image
              src={book.coverImage}
              alt={`${book.title} Cover`}
              height={275}
              width={275}
              className="object-cover rounded-lg opacity-100 shadow-lg"
            />
          </div>
          <div className='flex flex-row items-center relative top-[10px] justify-around w-{95%}'>
            <div className='text-white text-md'>
              <p>
                Get your copy now! 
              </p>
            </div>
            <div>
              <Link 
                href={book.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-4xl text-amazon hover:text-accent transition-colors"
                >
                <FaAmazon />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section - Book Details and Testimonials */}
        <div className="items-center justify-center md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
          <p className="text-white mb-8">{book.description}</p>

          {/* Testimonials Slider */}
          {testimonials.length > 0 && (
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
                  <SwiperSlide 
                    key={index}
                    className="py-4"
                  >
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
                      <div className="w-2/3 items-center">
                        <p className="text-white text-sm">{testimonial.testimonial}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BooksPage;