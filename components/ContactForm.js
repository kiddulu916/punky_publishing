import { useState } from "react";
import { sendContactForm } from "../lib/api";
import { BsArrowRight } from "react-icons/bs";

  
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
      <div className='flex gap-x-6 w-full '>
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
  );
}

export default ContactForm; 