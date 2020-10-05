import React from 'react';
import Link from 'next/link'
import Button from './Button/Button';
import styles from '../styles/2-components/navbar.module.scss';
const NavBar = () => {
  const [menuStatus, setMenuStatus] = React.useState(false);
  const onClick = async () => setMenuStatus(!menuStatus);
  const menuOpen = menuStatus ? 'menu-active' : '';
  return (
    <nav role="navigation" className={`${styles.navbar} ${styles[menuOpen]}`}>
      <ul className={`${styles.overlay} ${styles[menuOpen]}`}>
        <Link href="/">
          <a onClick={onClick}>Home</a>
        </Link>
        <Link  href="/about" >
          <a onClick={onClick}>About</a>
        </Link>
      </ul>
      <Button
        label='menu' 
        id='menu-toggle' 
        onClick={() => onClick()} 
      />
    </nav>
  )
}

export default NavBar;
