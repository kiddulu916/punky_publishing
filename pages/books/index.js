// Import necessary components and libraries
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
import Bulb from '../../components/Bulb';

const Books= () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section - Book Cover and Amazon Link */}
        <div className="md:w-1/3 flex flex-col items-center">
          <motion.div 
            variants={fadeIn("right", 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="relative top-[65px] left-[30px] mx-0 my-0 w-full aspect-[3/4] max-w-md"
          >
            <Image
              src={BookData.coverImage}
              alt='book cover'
              height={275}
              width={275}
              className="object-cover rounded-lg opacity-100 shadow-lg pt-5"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex flex-row items-center relative pt-9 justify-around w-{95%} pr-5'
          >
            <div className='text-white text-lg'>
              <p className='text-bold pr-3'>
                Get your copy now! 
              </p>
            </div>
            <div>
              <Link 
                href={BookData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-4xl text-amazon hover:text-accent transition-colors"
                >
                <FaAmazon />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Section - Book Details and Testimonials */}
        <div className="items-center justify-center md:w-2/3">
          <motion.h1 
            variants={fadeIn("down", 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="text-3xl font-bold mb-4"
          >
            {BookData.title}
          </motion.h1>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <BookDescription />
          </motion.div>
          <motion.p
            variants={fadeIn("down", 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='text-white text-bold text-center text-[24px] pt-10 mt-10'>What people are saying</motion.p>
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial='hidden'
            animate='show'
            exit='hidden' 
            className='text-white text-bold text-center text-[24px] pt-[150px]' 
          >
            <TestimonialSlider />
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
          className="absolute top-[500px] right-[50px]"
        >
          <Bulb />
        </motion.div>
      </div>
    </div>
  );
};

export default Books;