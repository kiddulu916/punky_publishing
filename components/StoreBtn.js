import React, { FC } from 'react';
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

interface StoreBtnProps {
  src: string,
  width: number,
  height: number,
  alt: string,
  className?: string,
}

const StoreBtn: FC<StoreBtnProps> = ({ src, width, height, alt, className }) => {
  return (
    <div className='mx-auto xl:mx-0'>
      <Link
        href={'https://www.amazon.com/dp/B0DBMQHH5V'}
        className='relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'
      >
        <Image
<<<<<<<< HEAD:components/StoreBtn.tsx
          src={src}
          width={width}
          height={height}
          alt={alt}
          className={className}
========
          src={'/rounded-text.png'}
          width={175}
          height={175}
          alt='rounded text'
          className='animate-spin-slow w-full h-full max-w-[175px] max-h-[175px]'
>>>>>>>> parent of 812db8e (converted to typescript):components/StoreBtn.js
        />
        <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300' />
      </Link>
    </div>
  );
};

export default StoreBtn;
