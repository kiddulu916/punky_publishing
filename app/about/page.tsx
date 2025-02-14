// React useState
import React, { useState, FC } from "react";

//components
import FlippedAvatar from '../../components/FlippedAvatar';
import Circles from '../../components/Circles';
import Socials from "../../components/Socials";
import { AnimatedSection } from "../../lib/AnimatedSection";
import "../../styles/globals.css"
import Bulb from "@/components/Bulb";

// Define the About component as a functional component with no props
const About: FC = () => {
  const [index] = useState<number>(0);
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 flex items-center text-center xl:text-left'>
      {/* Circles */}
      <Circles 
        src={'/circles.png'} 
        width={260} 
        height={200} 
        alt='circle image'
        className='w-full h-full'
      />
      
      <div className='absolute -bottom-15 left-0 xl:left-[50%] rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10'>
        <Bulb 
          src={'/bulb.png'} 
          width={260}
          height={200}
          className='w-full h-full '
          alt='bulb'
        />
      </div>

      {/* flipped avatar img */}
      <AnimatedSection 
        direction='right' 
        delay={0.2} 
        className='hidden xl:flex absolute top-[75px] right-[885px]'
      >
        <FlippedAvatar />
      </AnimatedSection>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        <div 
          className='flex-1 flex flex-col  justify-center'
        >
        </div>
        
        {/* info */}
        <AnimatedSection 
          direction='left' 
          delay={0.4} 
          className='flex flex-col absolute xl:relative w-full top-[90px] xl:top-[5px]  text-center xl:max-w-[75%] pr-0 xl:pr-10 h-[480px]'
        >
          <div className='container mx-auto flex flex-col w-full xl:top-[30px] items-center justify-center text-center text-sm xl:text-[18px]'>
            <div className='flex flex-col gap-y-2'>
              <h1 className=' font-semibold text-xl xl:text-3xl text-accent'>About Us</h1>
              <p className='indent-4 md:indent-8 lg:indent-8 xl:indent-8 text-[14px] md:text-[16px] lg:text-[16px] leading-normal md:leading-tight lg:leading-tight xl:leading-tight xl:text-[18px] text-white'>Punky Publishing is a company run by a dynamic 35-year-old author who is deeply passionate about video games, art, architecture, engineering, and learning various computer programs. We are dedicated advocate for accessible and innovative teaching, striving to empower people with the tools and knowledge they need to bring their creative visions to life.<br /></p>
              <p className='indent-8 md:indent-8 lg:indent-8 xl:indent-8 text-[14px] md:text-[16px] lg:text-[16px] leading-normal md:leading-tight lg:leading-tight xl:leading-tight xl:text-[18px]'>Our journey into learning various programs began as a hobby. Still, it quickly evolved into a career as we discovered the joy of creating immersive and engaging ways to teach or guide people in their journey. We have since worked on numerous successful projects, gaining a wealth of experience across various programs, platforms, and genres. This hands-on experience has fueled our passion for teaching and sharing our insights with others.<br /></p> 
              <p className='hidden indent-8 md:indent-8 lg:indent-8 xl:indent-8 md:text-[16px] md:flex lg:flex xl:flex md:leading-tight lg:leading-tight leading-normal xl:leading-tight xl:text-[18px]'>Through our books, we aim to demystify the complexities of various niches, offering clear, step-by-step guides that are approachable for beginners yet rich with advanced techniques. Our writings are not just about content; it&apos;s also about learning, and it&apos;s about storytelling, creativity, and the art of crafting experiences that resonate with people.<br /></p>
              <p className='hidden indent-8 md:indent-8 lg:indent-8 xl:indent-8 md:text-[16px] md:flex lg:flex xl:flex md:leading-tight lg:leading-tight leading-normal xl:leading-tight xl:text-[18px]'>Our mission is to make any niche accessible to everyone, regardless of their technical background. We believe that anyone with a passion can learn, and our books have become trusted resources for those looking to start their journey or take their skills to the next level.</p>
              <div className='flex justify-center items-center text-4xl'>
                <Socials />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;