import React from 'react';
import { LuDot } from "react-icons/lu";

const BookDescription = () => {
    return (
      <div>
        <p className='text-white text-sm indent-8'>Imagine creating your own video game, even with zero coding experience.</p>
        <p className='text-white text-sm'>This book simplifies game development guiding you step by step through the basic fundamentals. </p>
        <p className='text-white text-sm'>You&apos;ll learn:</p>
        <div className='flex flex-col mt-[10px]'>
            <p className='flex text-white text-sm mt-[2px]'><LuDot className='mt-[3px] ml-[20px]' />The top three game engines and how to choose the right one.</p>
            <p className='flex text-white text-sm mt-[2px]'><LuDot className='mt-[3px] ml-[20px]' />Techniques used by professional developers.</p>
            <p className='flex text-white text-sm mt-[2px]'><LuDot className='mt-[3px] ml-[20px]' />Visual Scripting vs. Traditional Coding.</p>
            <p className='flex text-white text-sm mt-[2px]'><LuDot className='mt-[3px] ml-[20px]' />How to build multiplayer games and optimize performance.</p>
            <p className='flex text-white text-sm mt-[2px]'><LuDot className='mt-[3px] ml-[20px]' />2D/3D modeling, animation, and sound design essentials.</p>
        </div>
        <p className='text-white text-sm mt-[10px]'>Many great developers started as beginners—now it&apos;s your turn.</p>
      </div>
    )
};

export default BookDescription;