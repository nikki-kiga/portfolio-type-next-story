import * as React from 'react';
import Header from './Header';
import Footer from './Footer';

import styles from '../styles/2-components/layout.module.scss';

const Layout = ({ children }): JSX.Element => {
  return (
    <div className={styles['page-container']}>
      <a className={'visually-hidden'} href="#main-content">
        Skip to main content
      </a>
      <div className={styles['content-wrap']}>
        <Footer />
        <Header />
        <main id="main-content" className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
