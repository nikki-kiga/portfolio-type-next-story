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
        <li className={styles['nav-item']}>
          <Link href="/">
            <a className={styles.link} onClick={clickOut}>Home</a>
          </Link>
        </li>
        <li className={styles['nav-item']}>
          <Link href="/about" >
            <a onClick={clickOut}>About</a>
          </Link>
        </li>
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
