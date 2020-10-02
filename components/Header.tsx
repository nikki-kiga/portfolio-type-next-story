import * as React from 'react'
import NavBar from './NavBar'
import {Button} from './Button/Button'
import { useTheme } from 'providers/ThemeProvider'
import styles from '../styles/2-components/header.module.scss';

const Header = () => {
  const { theme, toggle } = useTheme();
  return (
    <header className={styles.header}>
    <NavBar/>
    <Button label={`Theme`} onClick={() => toggle()}/>
    </header>
    
  )
}

export default Header
