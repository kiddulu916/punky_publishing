// next image
import Image from "next/image";

// next link
import Link from "next/link";

// icons
import { HiArrowRight } from "react-icons/hi2";

const StoreBtn = () => {
  return (
    <div className='mx-auto xl:mx-0'>
      <Link
        href={'/store'}
        className='relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'
      >

        <Image
<<<<<<< HEAD:components/StoreBtn.tsx
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
=======
          src={'/rounded-text.png'}
          width={300}
          height={300}
          alt='rounded text'
          className='animate-spin-slow w-full h-full max-w-[300px] max-h-[300px]'
>>>>>>> parent of 4897b46 (converted to typescript):components/StoreBtn.ts
        />
        <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300' />
      </Link>
    </div>
  );
};

export default StoreBtn;
