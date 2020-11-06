/* eslint-disable jsx-a11y/media-has-caption */
import Head from 'next/head';
import React from 'react';
// import Image from 'next/images';

import Layout from '../components/Layout';
import Splash from '../components/Splash';
import { motion } from 'framer-motion';
import styles from '../styles/2-components/page.module.scss';

const About = (): JSX.Element => {
  const vidRef = React.useRef(null);
  const handlePlayVideo = () => {
    vidRef.current.paused ? vidRef.current.play() : vidRef.current.pause();
  };

  return (
    <motion.div exit={{ opacity: 0 }}>
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
        <section className={`${styles.section} ${styles['split-section']}`}>
          <motion.div className={`${styles.card} ${styles.first}`}>
            <h2 className={styles['section-title']}>
              <span>software. </span>
              <span>design. </span>
              <span>animation. </span>
            </h2>
            <p className={styles['card-details']}>
              Developing digital experiences that are rooted in embracing
              curiosity, inclusion, and transparency.
            </p>
            <img src="https://res.cloudinary.com/dsnywj1pi/image/upload/v1604452873/Portfolio/cylinders_ujuca5.png" alt="pink cylinders" />
          </motion.div>
          <motion.div className={styles.card} exit={{ opacity: 0 }}>
            <div className={styles.vidFrame}>
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
          </motion.div>
        </section>
      </Layout>
    </motion.div>
  );
};

export default About;
