import * as React from "react";
import Head from 'next/head'

import Layout from '../components/Layout'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Template Typescript Next Project</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <h1>Home Page</h1>
    </Layout>
  )
};

export default Home;
