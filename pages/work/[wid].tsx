import Head from 'next/head';
import React from 'react';
import HeadTags from '../../components/HeadTags';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import { motion } from 'framer-motion';

const Project = (): JSX.Element => {
  const router = useRouter();
  const { wid } = router.query;
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Layout>
        <Head>
          <title>Work Page</title>
          <meta name="description" content={`The work page for ${wid}.`}></meta>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <HeadTags />
        </Head>
        <p id="initial">This is the {wid} page!</p>
      </Layout>
    </motion.div>
  );
};

export default Project;
