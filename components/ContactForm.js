import { useState } from 'react';
    
const ContactForm = () => {
    const toast = useToast();
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
        toast({
          title: "Message sent.",
          status: "success",
          duration: 2000,
          position: "top",
        });
      } catch (error) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: error.message,
        }));
      }
    };
    return (
        <div>
            <FormControl isRequired isInvalid={touched.name && !values.name} className='flex-1 flex flex-col gap-3 xl:gap-6 w-full mx-auto'>
                <div className='flex gap-x-6 w-full bottom-[60px]'>
                    <div className='flex flex-col w-full'>
                        <input
                            type='text'
                            name='name'
                            errorBorderColor="red.300"
                            value={values.name}
                            placeholder='Name'
                            className='input'
                            onChange={handleChange}
                            onBlur={onBlur}
                        />
                        <FormErrorMessage>Required</FormErrorMessage>
                    </div>
                </div>
            </FormControl>
            <FormControl isRequired isInvalid={touched.email && !values.email} className='flex-1 flex flex-col gap-3 xl:gap-6 w-full mx-auto'>
                <div className='flex gap-x-6 w-full bottom-[60px]'>
                    <div className='flex flex-col w-full'>
                        <input
                            type='email'
                            name='email'
                            errorBorderColor="red.300"
                            value={values.email}
                            placeholder='Email'
                            className='input lowercase'
                            onChange={handleChange}
                            onBlur={onBlur}
                        />
                        <FormErrorMessage>Required</FormErrorMessage>
                    </div>
                </div>
            </FormControl>
            <FormControl isRequired isInvalid={touched.subject && !values.subject} className='flex-1 flex flex-col gap-3 xl:gap-6 w-full mx-auto'>
                <div className='flex gap-x-6 w-full bottom-[60px]'>
                    <div className='flex flex-col w-full'>
                        <input
                            type='text'
                            name='subject'
                            errorBorderColor="red.300"
                            value={values.subject}
                            placeholder='Subject'
                            className='input'
                            onChange={handleChange}
                            onBlur={onBlur}
                        />
                        <FormErrorMessage>Required</FormErrorMessage>
                    </div>
                </div>
            </FormControl>
            <FormControl isRequired isInvalid={touched.message && !values.message} className='flex-1 flex flex-col gap-3 xl:gap-6 w-full mx-auto'>
                <div className='flex gap-x-6 w-full bottom-[60px]'>
                    <div className='flex flex-col w-full'>
                        <textarea
                            type="text"
                            name='message'
                            value={values.message}
                            placeholder='Message'
                            className='textarea'
                            onChange={handleChange}
                            onBlur={onBlur}
                        />
                        <FormErrorMessage>Required</FormErrorMessage>
                    </div>
                </div>
            </FormControl>
            <button
                variant="outline"
                isLoading={isLoading} 
                disabled={
                    !values.name || !values.email || !values.subject || !values.message
                }
                onClick={onSubmit}
                className='btn rounded-full border border-white/600 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'     
            >
                Let&apos;s Talk
            </button>
        </div>
    );
}

export default ContactForm; 