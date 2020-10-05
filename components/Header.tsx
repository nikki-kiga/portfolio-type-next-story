import * as React from 'react';
import NavBar from './NavBar'
import Toggle from './Toggle'
import {useTheme } from 'providers/ThemeProvider'
import styles from '../styles/2-components/header.module.scss';

const Header = () => {
  const { theme, toggle } = useTheme();
  const [menuStatus, setMenuStatus] = React.useState(false);
  const darkOn = theme === 'dark' ? false : true;
  return (
    <header className={styles.header}>
      <div className={`${styles['header-wrapper']}`}>
        <div className={styles.logo}>
          <span className={styles.titleMain}>NI</span>
          <span className={styles.titleMain}>KI</span>
          <span className={styles.titleSub}>2020</span>
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
