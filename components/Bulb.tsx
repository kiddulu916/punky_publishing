import Image from "next/image";
import { FC } from "react";

interface BulbProps {
  src: string,
  width: number,
  height: number,
  alt: string,
  className?: string
};

const Bulb: FC<BulbProps> = ({ src, width, height, alt, className }) => {
  return (
    <div className='absolute -bottom-15 left-0 xl:left-[50%] rotate-12 mix-blend-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]'>
      <Image 
        src={src} 
        width={width}
        height={height}
        className={className}
        alt={alt} 
      />
    </div>
  );
};

export default Bulb;
