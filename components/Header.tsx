import * as React from 'react';
import NavBar from './NavBar'
import Toggle from './Toggle'
import { useTheme } from '../providers/ThemeProvider'
import styles from '../styles/2-components/header.module.scss';

const Header = () => {
  const { theme, toggle } = useTheme();
  const darkOn = theme === 'dark' ? false : true;
  return (
    <header id="header" className={styles.header}>
      <div className={`${styles['header-wrapper']}`}>
        <div className={styles.logo}>
          <div className={styles.titleMain}>
            <span>N</span>
            <span>I</span>
            <span>I</span>
            <span>K</span>
          </div>
          <span className={styles.titleSub}></span>
        </div>
        <div className={styles.controls}>
          <Toggle 
            onChange={() => toggle()} 
            style = 'toggle' 
            label='Dark Mode' 
            checked={darkOn}/>
          <NavBar/>
        </div>
      </div>
    </header>
  )
}

export default Header
