import '../styles/globals.css';

// components
<<<<<<<< HEAD:components/app.tsx
import Layout from './layout';
import Transition from '../lib/Transition';
========
import Layout from '../components/Layout';
import Transition from '../components/Transition';
>>>>>>>> parent of 812db8e (converted to typescript):pages/_app.js

// router
import { useRouter } from 'next/router';

// framer motion
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'> 
          <Transition /> 
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
