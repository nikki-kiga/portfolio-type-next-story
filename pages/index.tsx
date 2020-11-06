import * as React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { ImageSet } from 'caravaggio-react';
import sourceSet from '../components/sourceSet';

import styles from '../styles/2-components/page.module.scss';
import ImageOpt from '@components/ImageOpt';
import { useTheme } from 'providers/ThemeProvider';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
const defaultHover = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
const easeOutExpo = { duration: 1.4, ease: [0.16, 1, 0.3, 1] };

const firstText = {
  initial: { y: 0 },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const Home = (): JSX.Element => {
  const { theme } = useTheme();
  return (
    <Layout>
      <Head>
        <title>Home Page for XX</title>
        <meta
          name="description"
          content="The home page for XX. Learn more about YY."
        ></meta>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <motion.div initial="initial" animate="animate" exit="exit">
        <div className={styles.sections}>
          <section className={`${styles.section} ${styles['first-section']}`}>
            <div className={styles.splash}>
              <h1 className={styles['text-first']}>Nikki</h1>
              <h1 className={styles['text-second']}>Kiga</h1>

              <motion.div
                className={styles['splash-image-wrapper']}
                initial={{
                  y: '8%',
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  height: '100%',
                  transition: { delay: 0.2, ...easeOutExpo },
                }}
              >
                <div className={styles['splash-image']}>
                  {theme === 'light' ? (
                    <ImageOpt
                      url={
                        'https://res.cloudinary.com/dsnywj1pi/image/upload/v1604452873/Portfolio/bubbles-bright_kvuxxe.jpg'
                      }
                    />
                  ) : (
                    <ImageOpt
                      url={
                        'https://res.cloudinary.com/dsnywj1pi/image/upload/v1604452906/Portfolio/animGrowingCloner0028_dbbc6j.tiff'
                      }
                    />
                  )}
                </div>
              </motion.div>
            </div>
          </section>
          <section className={`${styles.section} ${styles.duoHighlight}`}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              consequuntur quibusdam, eveniet in, ipsam delectus ducimus
              adipisci error enim sequi omnis, veritatis odio inventore nulla
              vero itaque pariatur dolore? Aliquam!
            </p>
            <img src="/grey-blob.png" alt="grey bubble" />
            <img src="/grey-mod.png" alt="grey bubble" />
            add animate into view
          </section>
          <section className={`${styles.section} ${styles.highlight}`}>
            <img src="/cylinders.png" alt="pink cylinders" />
            add animate when in view
          </section>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Home;
