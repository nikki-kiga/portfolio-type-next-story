import Head from 'next/head';
import React from 'react';
import HeadTags from '../components/HeadTags'

import Layout from '../components/Layout'

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About Page</title>
        <meta name="description" content="The about page for XX."></meta>
        <HeadTags/>   
      </Head>
      <p id='initial'>
        This is the about page!
      </p>
    </Layout>
  )
};

export default About;
