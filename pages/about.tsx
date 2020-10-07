import Head from 'next/head';
import React from 'react';

import Layout from '../components/Layout'

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About Page</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <p>
        This is the about page!
      </p>
    </Layout>
  )
};

export default About;
