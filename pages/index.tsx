import * as React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { ImageSet } from 'caravaggio-react';
import sourceSet from '../components/sourceSet';

import styles from '../styles/2-components/page.module.scss';
import ImageOpt from '@components/ImageOpt';
import { useTheme } from 'providers/ThemeProvider';

const easeOutExpoTransition = { duration: 1.4, ease: [0.16, 1, 0.3, 1] };
const easeOutExpo = [0.16, 1, 0.3, 1];

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
          <section className={`${styles.section} ${styles.section1}`}>
            <div className={styles['splash-container']}>
              <div className={styles.splash}>
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, easeOutExpoTransition }}
                  exit={{ opacity: 0 }}
                  className={styles['text-first']}
                >
                  Nikki
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, easeOutExpoTransition }}
                  exit={{ opacity: 0 }}
                  className={styles['text-second']}
                >
                  Kiga
                </motion.h1>

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
                    transition: { delay: 0.2, duration: 1.4, ...easeOutExpo },
                  }}
                >
                  <div className={styles['splash-image']}>
                    {theme === 'light' ? (
                      <img
                        className={styles.rectImage}
                        src="https://res.cloudinary.com/dsnywj1pi/image/upload/v1604452873/Portfolio/bubbles-bright_kvuxxe.jpg"
                        alt="bubbles colliding"
                      />
                    ) : (
                      <img
                        className={styles.squareImage}
                        src="https://res.cloudinary.com/dsnywj1pi/image/upload/v1604645554/Portfolio/animGrowingCloner0028_jb6zad.jpg"
                        alt="cloned bubble mesh"
                      />
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          <section className={`${styles.section} ${styles.section2}`}>
            <div className={styles.duoHighlight}>
              <h1 className={styles.header1}>Architecto preferendis.</h1>

              <p className={styles.body1}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Expedita consequuntur quibusdam, eveniet in, ipsam delectus
                ducimus adipisci error enim sequi omnis, veritatis odio
                inventore nulla vero itaque pariatur dolore?
              </p>
              <img
                className={styles.image1}
                src="https://res.cloudinary.com/dsnywj1pi/image/upload/v1604452889/Portfolio/grey-mod_diqs91.png"
                alt="grey modified bubble"
              />
              <h2
                className={styles.header2}
              >{`"Illo doloribus quibusdam perspiciatis aliquam voluptatis ipsum"`}</h2>
              <img
                className={styles.image2}
                src="https://res.cloudinary.com/dsnywj1pi/image/upload/v1604452880/Portfolio/grey-blob_kzcypb.png"
                alt="grey bubble"
              />
            </div>
          </section>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Home;
