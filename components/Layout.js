// fonts
<<<<<<< HEAD:app/Layout.tsx
import {Sora} from 'next/font/google'
<<<<<<< HEAD:components/Layout.js
import { Metadata } from 'next'
import React, { FC, ReactNode } from 'react';

// metadata
export const metadata: Metadata = {
  title: 'Punky Publishing',
  description: 'Publishing site for books and authors',
}
=======
import {Sora} from '@next/font/google'
>>>>>>> parent of 812db8e (converted to typescript):components/Layout.js
=======
>>>>>>> parent of 4897b46 (converted to typescript):app/Layout.tsx

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

<<<<<<< HEAD:components/Layout.js
<<<<<<< HEAD:app/Layout.tsx
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
=======
const Layout = ({children}) => {
=======
// Define the type for Layout props
type LayoutProps = {
  children: React.ReactNode
};

const Layout = ({ children }: LayoutProps) => {
>>>>>>> parent of 4897b46 (converted to typescript):app/Layout.tsx
  return ( 
    <div 
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
<<<<<<< HEAD:components/Layout.js
>>>>>>> parent of 812db8e (converted to typescript):components/Layout.js
=======
>>>>>>> parent of 4897b46 (converted to typescript):app/Layout.tsx
  );
};

export default Layout;
