import Head from 'next/head';
import React from 'react';

import Layout from '../components/Layout'

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About Page</title>
      </Head>
      <p>
        This is the about page!
      </p>
    </Layout>
  )
};

export default About;
