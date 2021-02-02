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
        <div className={styles['non-footer']}>
          <Header />
          <main className={styles['main-content']}>
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
