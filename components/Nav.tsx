"use client";

import React, { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiEnvelope,
} from 'react-icons/hi2';

// Define the type for a single navigation link
interface NavLink {
  path: string;
  name: string;
  icon: React.JSX.Element;
}

// Define the props for the Nav component
interface NavProps {
  links: NavLink[];
}

// Sample navigation data
export const navData: NavLink[] = [
  { 
    name: 'Home', 
    path: '/', 
    icon: <HiHome /> 
  },
  { 
    name: 'About', 
    path: '/about', 
    icon: <HiUser /> 
  },
  { 
    name: 'Books', 
    path: '/books', 
    icon: <HiViewColumns />
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Nav: FC<NavProps> = ({ links }) => {
  const pathname = usePathname();
  return ( 
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-[60px] xl:h-auto bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md'>
      {/* inner */}
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
        {links.map((link, index) => (
          <Link 
            key={index}
            className={`${link.path === pathname && 'text-accent'} relative flex items-center group hover:text-accent transition-all duration-300`} 
            href={link.path}
          >
            {/* tooltip */}
            <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
              <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
                <div className='text-[12px] leading-none font-semibold capitalize'>
                  {link.name}
                </div>
                {/* triangle */}
                <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
              </div>
            </div>
            {/* icon */}
            <div className='xl:group-hover:animate-wiggle text-md xl:text-lg'>{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
