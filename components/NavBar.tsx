import React from 'react';
import Link from 'next/link'
import Button from './Button/Button';
import styles from '../styles/2-components/navbar.module.scss';
const NavBar = () => {
  const [menuStatus, setMenuStatus] = React.useState(false);
  const onClick = async () => setMenuStatus(!menuStatus);
  const clickOut = async () => setMenuStatus(false);
  const menuOpen = menuStatus ? 'menu-active' : '';
  return (
    <nav role="navigation" className={`${styles.navbar} ${styles[menuOpen]}`}>
      <ul className={`${styles.overlay} ${styles[menuOpen]}`}>
        <Link  href="/">
          <a className={styles.link} onClick={clickOut}>Home</a>
        </Link>
        <Link  href="/about" >
          <a className={styles.link} onClick={clickOut}>About</a>
        </Link>
      </ul>
      <Button
        id='menu-toggle'
        style={`hamburger`}
        extraStyle={`${menuOpen}`}
        onClick={() => onClick()}>
      </Button>
    </nav>
  )
}

export default NavBar;
