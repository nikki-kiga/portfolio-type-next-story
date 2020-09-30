import * as React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useTheme } from "providers/ThemeProvider";
import styles from '../styles/3-Layout/layout.module.scss';

const Layout = ({children}) => {

  const {theme} = useTheme()
  const themeStyle = theme === 'dark' ? 'dark-theme' : 'light-theme';
 return (
   <div className={`${styles[themeStyle]}`}>
   <Header></Header>
   <main>
     {children}
   </main>
   <Footer></Footer>
   </div>
 )
}

export default Layout

