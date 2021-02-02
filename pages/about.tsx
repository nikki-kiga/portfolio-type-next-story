/* eslint-disable jsx-a11y/media-has-caption */
import Head from 'next/head';
import React from 'react';
// import Image from 'next/images';

import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import styles from '../styles/2-components/about.module.scss';

const easeOutExpoTransition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };

const About = (): JSX.Element => {
  const vidRef = React.useRef<HTMLVideoElement>(null);
  const handlePlayVideo = () => {
    const node = vidRef.current;

    if (node) {
      node.paused ? node.play() : node.pause();
    }
  };

  return (
    <motion.div initial="initial" animate="animate" exit="exit">
      <Layout>
        <Head>
          <title>About Page</title>
          <meta name="description" content="The about page for XX."></meta>
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
        <section className={`${styles.section} ${styles.about}`}>
          <div className={styles['split-section']}>
            <div className={`${styles.card} ${styles.firstCard}`}>
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ easeOutExpoTransition }}
                exit={{ opacity: 0 }}
                className={styles['section-title']}
              >
                <h2 className={styles.header1}>software.</h2>
                <h2 className={styles.header2}>design.</h2>
                <h2 className={styles.header3}>animation.</h2>
              </motion.div>
              <div className={styles['section-body']}>
                <motion.p
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.05, ...easeOutExpoTransition }}
                  className={styles['card-details']}
                >
                  Developing digital experiences that are rooted in embracing
                  curiosity, inclusion, and transparency.
                </motion.p>
                <br></br>
                <motion.p
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.10, ...easeOutExpoTransition }}
                  className={styles['card-details']}
                >
  My previous experiences in data modeling give me a keen awareness of assumptions about data integrity and maintenance. Meanwhile, my technical project manager experiences remind me to keep the whole timeline in mind and implement the best tools for the team and project.
                </motion.p>
                <br></br>
                <motion.p
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.15, ...easeOutExpoTransition }}
                  className={styles['card-details']}
                >
  I enjoy approaching a problem from multiple angles. Web apps require constantly reevaluating similar issues from different perspectives. There are always new tools and libraries that enable sharing more compelling stories.
                </motion.p>
              </div>
            </div>
            <div className={`${styles.card} ${styles.vidFrame}`}>
              <video
                className={styles.highlightReel}
                ref={vidRef}
                loop
                autoPlay
                onClick={handlePlayVideo}
              >
                <source
                  src="https://res.cloudinary.com/dsnywj1pi/video/upload/v1604452951/Portfolio/hookClamp_kmteuy.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </section>
      </Layout>
    </motion.div>
  );
};

export default About;
