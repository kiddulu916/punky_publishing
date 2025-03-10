import React from 'react';
import { LuDot } from "react-icons/lu";

const BookDescription = () => {
  return (
    <div className='flex flex-col relative'>
      <div className='flex flex-col gap-2 sm:gap-0 '>
        <p className='text-white text-[13px] sm:text-[16px] leading-tight indent-8'>Imagine creating your own video game, even with zero coding experience.</p>
        <p className='text-white text-[13px] sm:text-[16px] leading-tight'>This book simplifies game development guiding you step by step through the basic fundamentals. </p>
        <p className='text-white text-[13px] sm:text-[16px] leading-tight'>You&apos;ll learn:</p>
        <p className='flex text-white text-[13px] sm:text-[16px] leading-tight mt-[2px]'><LuDot className='font-bold mt-[8px] ml-[20px]' />The top three game engines and how to choose the right one.</p>
        <p className='flex text-white text-[13px] sm:text-[16px] leading-tight mt-[2px]'><LuDot className='font-bold mt-[8px] ml-[20px]' />Techniques used by professional developers.</p>
        <p className='flex text-white text-[13px] sm:text-[16px] leading-tight mt-[2px]'><LuDot className='font-bold mt-[8px] ml-[20px]' />Visual Scripting vs. Traditional Coding.</p>
        <p className='flex text-white text-[13px] sm:text-[16px] leading-tight mt-[2px]'><LuDot className='font-bold mt-[8px] ml-[20px]' />How to build multiplayer games and optimize performance.</p>
        <p className='flex flex-row text-white text-[13px] sm:text-[16px] leading-tight mt-[2px]'><LuDot className='mt-[3px] ml-[20px]' />2D/3D modeling, animation, and sound design essentials.</p>
        <p className='text-white text-[13px] sm:text-[16px] leading-tight mt-[10px]'>Many great developers started as beginners—now it&apos;s your turn.</p>
      </div>
    </div>
  );
};

export default BookDescription;