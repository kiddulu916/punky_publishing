//components
import 'dotenv/config';
import Circles from '/components/Circles';
import ContactForm from '../../components/ContactForm';

// icons
import { BsArrowRight } from 'react-icons/bs'

// framer
import { motion } from 'framer-motion'

// variants
import { fadeIn } from '../../variants'

const Contact = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex item0s-center justify-center h-full'>
        <Circles />
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-5 lg:flex lg:mb-8'
          >
            Let&apos;s <span className='text-accent'>connect.</span>
          </motion.h2>
          {/* Use the ContactForm component */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
