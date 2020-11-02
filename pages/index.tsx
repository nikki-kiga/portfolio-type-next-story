import * as React from 'react';
import Head from 'next/head';
import HeadTags from '../components/HeadTags';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const transition = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] };
const defaultHover = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = () => {
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
      <h1>Home Page</h1>
      <motion.div whileHover={{ scale: 1.2 }} transition={defaultHover}>
        HEY THERE!
      </motion.div>
      <motion.img exit={{ opacity: 0 }} transition={transition} />
    </Layout>
  );
};

export default Home;
