import * as React from 'react'
import Link from 'next/link'
import { useTheme } from "providers/ThemeProvider";
import styles from '../styles/2-components/navBar.module.scss'

const NavBar = () => {
  const {theme} = useTheme()
  const themeStyle = theme === 'dark' ? 'dark-theme' : 'light-theme';
  return (
    <nav className={`${styles.nav}`}>
      <Link href="/">
        <a>Home</a>
      </Link>
    </nav>
  )
}

export default NavBar;
