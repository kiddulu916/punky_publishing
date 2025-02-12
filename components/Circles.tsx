import Image from "next/image";
import { FC } from "react";

interface CirclesProps {
  src: string,
  width: number,
  height: number,
  alt: string,
  className?: string
};

const Circles: FC<CirclesProps> = ({ src, width, height, alt, className }) => {
  return (
    <div className='w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10'>
      <Image 
        src={src} 
        width={width} 
        height={height} 
        alt={alt}
        className={className}
      />
    </div>
  );
};

export default Circles;
