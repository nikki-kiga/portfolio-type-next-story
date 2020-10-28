import Head from 'next/head';
import React from 'react';
import HeadTags from '../components/HeadTags'

import Layout from '../components/Layout'
import Splash from '../components/Splash'

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About Page</title>
        <meta name="description" content="The about page for XX."></meta>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <HeadTags/>   
      </Head>
      <p id='initial'>
        This is the about page!
        <Splash/>
      </p>
    </Layout>
  )
};

export default About;
