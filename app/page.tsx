"use client"

// components
import React, { FC } from 'react';
import ParticlesContainer from "../components/ParticlesContainer";
import Avatar from "../components/Avatar";
import { AnimatedSection } from "../lib/AnimatedSection";

const Home: FC = () => {
  return (
    <div className='bg-primary/60 h-full relative'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          {/* title */}
          <AnimatedSection direction="down" delay={0.2}>
            <h1 className='h1'>
              Empowering Minds <br /> One{' '} 
              <span className='text-accent'>Book At A Time</span>
            </h1>
          </AnimatedSection>
          
          {/* subtitle */}
          <AnimatedSection direction="down" delay={0.4}>
            <p className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
              [Your subtitle about your <br /> companys mission statement here]
            </p>
          </AnimatedSection>
          {/* btn */}
          <AnimatedSection direction="down" delay={0.6}>
            <div className='hidden xl:flex xl:justify-center xl:relative'>
         
            </div>
          </AnimatedSection>
        </div>
      </div>      
      
      {/* bg img */}
      <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
      {/* particles */}
      <ParticlesContainer />
      <AnimatedSection direction="up" delay={0.5}>
        {/* avatar img */}
        <div className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:-bottom-5 lg:right-[1%]'>
          <Avatar
            src='/avatar.png'
            width={737}
            height={678}
            alt='avatar image'
            className='translate-z-0 h-full w-full'
          />
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;
