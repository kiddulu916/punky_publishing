import Image from "next/image";
import { FC } from "react";

interface AvatarProps {
  src: string,
  width: number,
  height: number,
  alt: string,
  className?: string
};

const Avatar: FC<AvatarProps> = ({ src, width, height, alt, className }) => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      {/* change image to the company character */}
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

export default Avatar;
