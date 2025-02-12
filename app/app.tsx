import '../app/globals.css';

// components
import Layout from './layout';
import Transition from '../lib/Transition';

// router
import { useRouter } from 'next/router';

// framer motion
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

// Import AppProps type from next/app
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
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
