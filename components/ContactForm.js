
import React, { useRef, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs'
import 'dotenv/config';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();
    console.log(process.env)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('process.env.NEXT_PUBLIC_SERVICE_ID', 'process.env.NEXT_PUBLIC_TEMPLATE_ID', form.current, {
          publicKey: 'process.env.NEXT_PUBLIC_PUBLIC_KEY',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  

    return (
        <form ref={form} onSubmit={sendEmail} className='flex-1 flex flex-col gap-3 xl:gap-6 w-full mx-auto'>
            <div className='flex gap-x-6 w-full'>
                <div className='flex flex-col w-full'>
                    <input
                        type='text'
                        name='user_name'
                        placeholder='Name'
                        className='input'
                        required
                    />
                </div>
                <div className='flex flex-col w-full lowercase'>
                    <input
                        type='email'
                        name='user_email'
                        placeholder='Email'
                        className='input lowercase'
                        required
                    />     
                </div>
            </div>
            <div className='flex flex-col w-full'>
                <input
                    type='text'
                    name='subject'
                    placeholder='Subject'
                    className='input'
                    required
                />
            </div>
            <div className='flex flex-col w-full'>
                <textarea
                    name='message'
                    placeholder='Message'
                    className='textarea'
                    required
                ></textarea>
            </div>
            <input 
                type='submit'
                value='Lets talk'
                className='btn rounded-full border border-white/600 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'     
            />
        </form>
    );
};

export default ContactForm; 