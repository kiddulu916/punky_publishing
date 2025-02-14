// fonts
import {Sora} from 'next/font/google'
import { Metadata } from 'next'
import React, { FC, ReactNode } from 'react';

// metadata
export const metadata: Metadata = {
  title: 'Punky Publishing',
  description: 'Publishing site for books and authors',
}

// font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

// components
import Nav, { navData } from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div 
          className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
          >
          <TopLeftImg 
            src='/top-left-img.png' 
            width={400} 
            height={400} 
            alt='top left image'
            priority={true}
            className='absolute top-0 left-0'
          />
          <Nav links={navData} />
          <Header />
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html> 
  );
};

export default Layout;
