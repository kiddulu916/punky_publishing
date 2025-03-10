// next image
import Image from "next/image";

// next link
import Link from "next/link";

// icons
import { HiArrowRight } from "react-icons/hi2";

import React from 'react';

const StoreBtn = () => {
  return (
    <div className='relative mx-auto xl:mx-0'>
      <Image
        src={'/rounded-text.png'}
        width={185}
        height={185}
        alt='rounded text'
        className='animate-spin-slow w-full h-full max-w-[185px] z-20 max-h-[185px]'
      />
      <a
        href={'https://www.amazon.com/dp/B0DBMQHH5V'}
        target="_blank"
        rel="noopener noreferrer"
        className='absolute bottom-1 w-[185px] h-[185px] flex z-30 justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'
      >
        <HiArrowRight className='absolute cursor-pointer text-4xl group-hover:text-accent group-hover:translate-x-2 transition-all duration-300 z-40' />
      </a>
    </div>
  );
};

export default StoreBtn;
