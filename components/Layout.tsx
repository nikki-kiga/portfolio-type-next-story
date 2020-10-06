import * as React from 'react'
import Header from './Header'
import Footer from './Footer'

import styles from '../styles/3-layout/layout.module.scss';

const Layout = ({children}) => {
 return (
   <div className={styles.layout}>
      <a className={styles['visually-hidden']} href="#main-content">
        Skip to main content
      </a>
      <Header></Header>
        <main id="main-content">
          {children}
        </main>
      <Footer></Footer>
   </div>
 )
}

export default Layout

