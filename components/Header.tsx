// React
import React, { FC } from "react";

// next image & link
import Link from "next/link";

// Logo Component
import Logo from "./Logo"

const Header: FC = () => {
  return (
    <header className="absolute z-30 w-full -top-20 xl:-top-0 flex items-center px-0 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
          {/* logo */}
          <Link href={'/'}>
            <Logo
              src={'../public/logo.png'}
              width={220}
              height={120}
              alt='Logo'
              priority={true}
              className='w-auto h-auto max-w-[300px] max-h-[200px] -top-10'
            />
          </Link>
        </div>
      </div>
    </header>);
};

export default Header;
