import Image from "next/image";
import { FC } from "react";

interface LogoProps {
    src: string,
    width: number,
    height: number,
    alt: string,
    priority: boolean,
    className?: string
};

const Logo: FC<LogoProps> = ({ src, width, height, alt, priority, className }) => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
            <Image 
                src={src}
                width={width}
                height={height}
                alt={alt}
                priority={priority}
                className={className}
            />
        </div>
    )
};

export default Logo;