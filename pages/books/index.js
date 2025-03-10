// Import necessary components and libraries
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaAmazon } from 'react-icons/fa';
import TestimonialSlider from '../../components/TestimonialSlider'
import BookData from '../../data/BookData'
import BookDescription from '../../components/BookDescription';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Books = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden top-20 sm:top-0">
      {/* Title for small screens only - above both sections */}
      <motion.div 
        variants={fadeIn("down", 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="sm:hidden w-full text-center py-4"
      >
        <h1 className="font-bold text-lg">{BookData.title}</h1>
      </motion.div>

      {/* Main flex container - always horizontal layout */}
      <div className="flex flex-row w-full h-full">
        
        {/* Left Section - Book Cover and Amazon Link - always 1/3 width */}
        <motion.div 
          variants={fadeIn("right", 0.3)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="flex flex-col items-center justify-center w-1/3 px-2 mb-72 sm:mb-0"
        >
          {/* Book Cover */}
          <div className="relative mb-4">
            <Image
              src={BookData.coverImage}
              alt='book cover'
              height={275}
              width={275}
              className="object-cover w-auto h-auto max-h-64 sm:max-h-80 xl:max-h-96 rounded-lg shadow-lg "
            />
          </div>
          
          {/* Get your copy with Amazon link */}
          <div className="flex flex-row items-center justify-center">
            <p className="sm:hidden font-bold text-sm">Get a copy!</p>
            <p className="hidden sm:block font-bold text-base">Get your copy now!</p>
            <Link 
              href={BookData.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-amazon text-xl hover:text-accent transition-colors"
            >
              <FaAmazon />
            </Link>
          </div>
        </motion.div>
        
        {/* Right Section - Book Details and Testimonials - always 2/3 width */}
        <motion.div 
          variants={fadeIn("left", 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="flex flex-col w-2/3 px-4 h-full overflow-y-auto"
        >
          {/* Book Title - visible only on sm screens and up */}
          <h1 className="hidden sm:block font-bold text-lg sm:mt-36 sm:text-xl md:text-2xl xl:mt-14 mb-4">
            {BookData.title}
          </h1>
          
          {/* Book Description */}
          <div className="mb-4">
            <BookDescription />
          </div>
          
          {/* Testimonial Heading - visible only on xl screens */}
          <h1 className="hidden xl:block text-center font-bold text-2xl mt-10 mb-4">
            What people are saying
          </h1>
          
          {/* Testimonial Slider - visible only on xl screens */}
          <div className="hidden xl:block w-full">
            <TestimonialSlider />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Books;