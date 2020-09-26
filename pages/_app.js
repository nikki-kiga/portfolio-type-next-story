import '../styles/1-base/_base.scss';

import React from 'react';
import App from 'next/app';

import { ThemeProvider } from '../providers/ThemeProvider';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
      </div>
    );
  }
}
