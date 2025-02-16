import { useState } from "react";
import { sendContactForm } from "../lib/api";

  
const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };


const ContactForm = () => {
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
        isLoading: true,
      }));
      try {
        await sendContactForm(values);
        setTouched({});
        setState(initState);
      } catch (error) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: error.message,
        }));
      }
    };
    return (
        <form className='flex-1 flex flex-col gap-3 xl:gap-6 w-full mx-auto'>
            <div className='flex gap-x-6 w-full bottom-[60px]'>
                <div className='flex flex-col w-full'>
                    <input
                        type='text'
                        name='name'
                        value={name}
                        placeholder='Name'
                        className='input'
                        onChange={handleChange}
                        onBlur={onBlur}
                    />
                </div>
                <div className='flex flex-col w-full'>
                    <input
                        type='email'
                        name='email'
                        value={email}
                        placeholder='Email'
                        className='input lowercase'
                        onChange={handleChange}
                        onBlur={onBlur}
                    />
                </div>
                <div className='flex flex-col w-full'>
                    <input
                        type='text'
                        name='subject'
                        value={subject}
                        placeholder='Subject'
                        className='input'
                        onChange={handleChange}
                        onBlur={onBlur}
                    />
                </div>
                <div className='flex flex-col w-full'>
                    <textarea
                        type="text"
                        name='message'
                        value={message}
                        placeholder='Message'
                        className='textarea'
                        onChange={handleChange}
                        onBlur={onBlur}
                    />
                </div>
                <div className='flex flex-col w-full'>
                    <button
                        isLoading={isLoading} 
                        onClick={onSubmit}
                        className='btn rounded-full border border-white/600 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'     
                    >
                        Let&apos;s Talk
                    </button>
                </div>
            </div>
        </form>
    
    );
}

export default ContactForm; 