import { Button } from "@components/Button/Button";
import * as React from "react";
import Head from 'next/head'

import Layout from '../components/Layout'
import { useTheme } from "providers/ThemeProvider";
const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Template Typescript Next Project</title>
      </Head>
    </Layout>
  )
};

export default Home;
