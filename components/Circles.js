// next image
import Image from "next/image";

const Circles = () => {
  return (
    <div className='w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10'>
      <Image 
        src={'/circles.png'} 
        width={260} 
        height={200} 
        alt='circle image'
        className='w-full h-full z-0'
      />
    </div>
  );
};

export default Circles;
