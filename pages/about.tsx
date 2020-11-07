/* eslint-disable jsx-a11y/media-has-caption */
import Head from 'next/head';
import React from 'react';
// import Image from 'next/images';

import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import styles from '../styles/2-components/about.module.scss';

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
              <h2>
                <span className={styles.header1}>software.</span>
                <span className={styles.header2}>design.</span>
                <span className={styles.header3}>animation.</span>
              </h2>
              <p className={styles['card-details']}>
                Developing digital experiences that are rooted in embracing
                curiosity, inclusion, and transparency.
              </p>
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
