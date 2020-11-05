/* eslint-disable jsx-a11y/media-has-caption */
import Head from 'next/head';
import React from 'react';

import Layout from '../components/Layout';
import Splash from '../components/Splash';
import { motion } from 'framer-motion';
import styles from '../styles/2-components/page.module.scss';

const About = (): JSX.Element => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Layout>
        <Head>
          <title>About Page</title>
          <meta name="description" content="The about page for XX."></meta>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
        </Head>
        <section className={`${styles.section} ${styles['split-section']}`}>
          <motion.div className={styles.card}>
            <h2 className={styles['section-title']}>
              <span>software. </span>
              <span>design. </span>
              <span>animation. </span>
            </h2>
            <p>
              Developing digital experiences that are rooted in embracing
              curiosity, inclusion, and transparency.
            </p>
          </motion.div>
          <motion.div className={styles.card} exit={{ opacity: 0 }}>
            <video className={styles.highlightReel} autoPlay loop>
              <source src="./hookClamp.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </section>
      </Layout>
    </motion.div>
  );
};

export default About;
