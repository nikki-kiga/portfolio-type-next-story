import '../styles/global/global.scss';
import React from 'react';
import App from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { CaravaggioProvider } from "caravaggio-react";

import { ThemeProvider } from '../providers/ThemeProvider';

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <div>
        <ThemeProvider>
          <AnimatePresence initial={false} exitBeforeEnter>
            <CaravaggioProvider url="/api/assets">
              <Component {...pageProps} key={router.route} />
            </CaravaggioProvider>
          </AnimatePresence>
        </ThemeProvider>
      </div>
    );
  }
}
