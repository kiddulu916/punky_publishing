import React, { FC } from 'react';
import Link from "next/link";

// icons
import { RiMastercardLine, RiAmazonLine, RiFacebookLine } from "react-icons/ri";

const Socials: FC = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.facebook.com/punky.publishing'} className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </Link>
      <Link href={'https://www.amazon.com/stores/author/B0DDR3YQHW/about'} className='hover:text-accent transition-all duration-300'>
        <RiAmazonLine />
      </Link>
      <Link href={'https://www.amazon.com/dp/B0DBMQHH5V'} className='hover:text-accent transition-all duration-300'>
        <RiMastercardLine />
      </Link>
    </div>
  );
};

export default Socials;
