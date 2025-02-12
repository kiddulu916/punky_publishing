import Image from 'next/image';
import { FC } from 'react';

interface AuthorPhotoProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
}

const AuthorPhoto: FC<AuthorPhotoProps> = ({ src, width, height, alt, className }) => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
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

export default AuthorPhoto;