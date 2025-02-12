// next image
import Image from "next/image";
import { FC } from "react";

interface TopLeftImgProps {
  src: string,
  width: number,
  height: number,
  alt: string,
  priority: boolean,
  className?: string
}

const TopLeftImg: FC<TopLeftImgProps> = ({ src, width, height, alt, priority, className}) => {
  return (
    <div className='absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50'>
      <Image 
        src={src} 
        width={width} 
        height={height} 
        alt={alt}
        priority={priority}
        className={className}
      />
    </div>
  );
};

export default TopLeftImg;
