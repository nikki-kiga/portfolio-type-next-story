import * as React from 'react';
import NavBar from './NavBar'
import Toggle from './Toggle'
import {useTheme } from 'providers/ThemeProvider'
import styles from '../styles/2-components/header.module.scss';

const Header = ({}) => {
  const { theme, toggle } = useTheme();
  const darkOn = theme === 'dark' ? false : true;
  return (
    <header className={styles.header}>
    <NavBar/>
    <Toggle onChange={() => toggle()} label={'Dark Mode'} checked={darkOn}/>
    </header>
    
  )
}

export default Header
