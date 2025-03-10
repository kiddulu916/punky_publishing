import { motion } from "framer-motion";
import ParticlesContainer from "../components/ParticlesContainer";
import StoreBtn from "../components/StoreBtn"
import Avatar from "../components/Avatar"
import { fadeIn } from "../variants"

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-[130px] xl:text-left h-full container mx-auto'>
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1 lg:indent-16'
          >
            Empowering Minds <br /> One{' '} 
            <span className='text-accent'>Book At A Time</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.4 )}
            initial='hidden'
            animate='show'
            exit='hidden' 
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 '
          >
            Making exploration accessible by offering beginner-friendly resources that turn daunting hobbies into delightful, achievable pursuits.
          </motion.p>
          {/* btn */}
          <motion.div
            variants={fadeIn('down', 0.4 )}
            initial='hidden'
            animate='show'
            exit='hidden' 
            className='flex justify-center z-30 xl:hidden relative'
          >
            <StoreBtn />
          </motion.div>
          <motion.div
            variants={fadeIn('down', 0.4 )}
            initial='hidden'
            animate='show'
            exit='hidden' 
            className='hidden z-30 xl:flex'
          >
            <StoreBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        {/* bg img */}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        {/* particles */}
        <div>
          <div className='absolute inset-0 z-0'>
            <ParticlesContainer />
          </div>
          {/* avatar img */}
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={{duration: 1, ease: 'easeInOut'}} 
            className='w-full h-full max-w-[737px] max-h-[678px] z-10 absolute -bottom-32 lg:bottom-5 xl:right-[-4%]'
            >
            <Avatar />
          </motion.div>
        </div>
      </div>      
    </div>
  );
};

export default Home;
