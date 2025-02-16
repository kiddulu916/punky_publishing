"use client";

//components
import 'dotenv/config';
import Circles from '/components/Circles';
import { useState } from "react";
import { sendContactForm } from "../../lib/api";
  

// icons
import { BsArrowRight } from 'react-icons/bs'

// framer
import { motion } from 'framer-motion'

// variants
import { fadeIn } from '../../variants'

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isloading: false, error: "", values: initValues };

const Contact = () => {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isloading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isloading: false,
        error: error.message,
      }));
    }
  };
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <Circles />
        {/* text & form */}
        <div className='flex flex-col w-full absolute bottom-[65px] xl:bottom-10 max-w-[700px]'>
          {/* text */}
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-5 text-[36px] sm:text-[40px] lg:text-[58px] lg:flex lg:mb-10 lg:mt-[-40px]'
          >
            Let&apos;s<span className='text-accent'>connect.</span>
          </motion.h2>
          <form className='flex-1 flex flex-col gap-2 xl:gap-6 w-full mx-auto'>
            <div className='flex gap-x-6 w-full bottom-[60px]'>
              <input
                type='text'
                name='name'
                placeholder='Name'
                className='input'
                onChange={handleChange}
                onBlur={onBlur}
              />
              <input
                type='email'
                name='email'
                placeholder='Email'
                className='input lowercase'
                onChange={handleChange}
                onBlur={onBlur}
              />
            </div>
            <input
              type='text'
              name='subject'
              placeholder='Subject'
              className='input'
              onChange={handleChange}
              onBlur={onBlur}
            />
            <textarea
                type="text"
                name='message'
                placeholder='Message'
                className='textarea'
                onChange={handleChange}
                onBlur={onBlur}
            />
            <button
                isLoading={isLoading} 
                onClick={onSubmit}
                className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'     
            >
                <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                  Let&apos;s Talk
                </span>
                <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-al duration-300 asoluter text-[22px]' />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
