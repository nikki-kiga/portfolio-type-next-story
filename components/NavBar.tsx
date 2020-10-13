import React from 'react';
import Link from 'next/link'
import Button from './Button/Button';
import styles from '../styles/2-components/navbar.module.scss';

export interface Props {
  links: {
    pathName: string,
    path: string,
  }[]
}
const NavBar = ({ links = [] }:Props) => {
  const [menuStatus, setMenuStatus] = React.useState(false);
  const onClick = async () => setMenuStatus(!menuStatus);
  const clickOut = async () => setMenuStatus(false);
  const menuOpen = menuStatus ? 'menu-active' : '';
  const navItems = links.map( (item, i) => (
    <li key={i} className={styles['nav-item']}>
      <Link href={item.path}>
        <a className={styles.link} onClick={clickOut}>{item.pathName}</a>
      </Link>
    </li>
  ));
  return (
    <nav role="navigation" className={`${styles.navbar} ${styles[menuOpen]}`}>
      <ul className={`${styles.overlay} ${styles[menuOpen]}`}>
        {navItems}
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
