import * as React from 'react';
import Head from 'next/head';
import HeadTags from '../components/HeadTags';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import Image from '../components/Image';

import styles from '../styles/3-layout/page.module.scss';

const transition = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] };
const defaultHover = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>Home Page for XX</title>
        <meta
          name="description"
          content="The home page for XX. Learn more about YY."
        ></meta>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <HeadTags />
      </Head>
      <div className={styles.sections}>
        <section className={`${styles.section} ${styles['splash']}`}>
          <h1 className={styles['splash-text']}>
            <span className={styles['tone-down']}>Nikki Kiga</span>
          </h1>
          <img
            // exit={{ opacity: 0 }}
            // transition={transition}
            src="/bubbles-bright.jpg"
            alt="colliding water droplets"
          />
        </section>
        <section className={`${styles.section} ${styles.duoHighlight}`}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            consequuntur quibusdam, eveniet in, ipsam delectus ducimus adipisci
            error enim sequi omnis, veritatis odio inventore nulla vero itaque
            pariatur dolore? Aliquam!
          </p>
          <img src="/grey-blob.png" alt="grey bubble" />
          <img src="/grey-mod.png" alt="grey bubble" />
          add animate into view
        </section>
        <section className={`${styles.section} ${styles.highlight}`}>
          <img
            // exit={{ opacity: 0 }}
            // transition={transition}
            src="/cylinders.png"
            alt="pink cylinders"
          />
          add animate when in view
        </section>
      </div>

      {/* <motion.div whileHover={{ scale: 1.2 }} transition={defaultHover}>
        HEY THERE!
      </motion.div> */}
    </Layout>
  );
};

export default Home;
