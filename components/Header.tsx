import * as React from 'react';
import NavBar from './NavBar'
import Toggle from './Toggle'
import Burger from './Burger';
import {useTheme } from 'providers/ThemeProvider'
import styles from '../styles/2-components/header.module.scss';

const Header = () => {
  const { theme, toggle } = useTheme();
  const [menuStatus, setMenuStatus] = React.useState(false);
  const darkOn = theme === 'dark' ? false : true;
  const menuOpen = menuStatus ? 'menuOpen' : '';
  return (
    <header className={`${styles.header} ${styles[menuOpen]}`}>

    <Toggle 
      onChange={() => toggle()} 
      style = 'toggle' 
      label='Dark Mode' 
      checked={darkOn}/>
    <Burger 
        menuStatus={menuStatus}
        setMenuStatus={setMenuStatus}
      />
    <NavBar/>
    </header>
    
  )
}

export default Header
