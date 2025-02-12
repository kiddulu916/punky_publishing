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
          src={src}
          width={width}
          height={height}
          alt={alt}
          className={className}
        />
        <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300' />
      </Link>
    </div>
  );
};

export default StoreBtn;
