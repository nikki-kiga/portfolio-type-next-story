import * as React from "react";
import Head from 'next/head'
import HeadTags from '../components/HeadTags'

import Layout from '../components/Layout'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Home Page for XX</title>
        <meta name="description" content="The home page for XX. Learn more about YY."></meta>
        <HeadTags/>
      </Head>
      <h1>Home Page</h1>
    </Layout>
  )
};

export default Home;
