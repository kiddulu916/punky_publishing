import React, { FC } from 'react';
import Image from 'next/image';

interface FlippedAvatarProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
}

const FlippedAvatar: FC<FlippedAvatarProps> = ({ src, width, height, alt, className }) => {
  return (
    <div className={`transform rotate-180 ${className}`}>
      <Image 
        src={src} 
        width={width} 
        height={height} 
        alt={alt} 
        className="object-cover"
      />
    </div>
  );
};

export default FlippedAvatar;