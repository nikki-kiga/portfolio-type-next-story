import '../styles/global/global.scss';
import React from 'react';
import App from 'next/app';
import { AnimatePresence } from 'framer-motion';

import { ThemeProvider } from '../providers/ThemeProvider';

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <div>
      <ThemeProvider>
        {/* <AnimatePresence exitBeforeEnter> */}
          <Component {...pageProps} key={router.route} />
        {/* </AnimatePresence> */}
      </ThemeProvider>
      </div>
    );
  }
}
