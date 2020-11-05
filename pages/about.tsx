/* eslint-disable jsx-a11y/media-has-caption */
import Head from 'next/head';
import React from 'react';
// import Image from 'next/images';

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
            {/* <video>
              <source
                src="https://res.cloudinary.com/my_cloud/video/upload/g_north,l_text:arial_60:watchme,y_20/watchme.webm"
                type="video/webm"
              />
              <source
                src="https://res.cloudinary.com/dsnywj1pi/video/upload/v1604452951/Portfolio/hookClamp_kmteuy.mp4"
                type="video/mp4"
              />
              <source
                src="https://res.cloudinary.com/my_cloud/video/upload/g_north,l_text:arial_60:watchme,y_20/watchme.ogv"
                type="video/ogg"
              />
            </video> */}
          </motion.div>
        </section>
      </Layout>
    </motion.div>
  );
};

export default About;
