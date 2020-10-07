import React from 'react'
import Link from 'next/link'
import styles from '../styles/2-components/footer.module.scss';

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <ul className={styles.links}>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
      </ul>
      <ul className={styles.socials}>
        <li>
          <a href="#" className="fa fa-twitter"></a>
        </li>
        <li>
          <a href="#" className="fa fa-dribbble"></a>
        </li>
        <li>
          <a href="#" className="fa fa-instagram"></a>
        </li>
        <li>
          <a href="#" className="fa fa-linkedin"></a>
        </li>
      </ul>
      <p className={styles.credits}>© Nikki Kiga 2020</p>
    </footer>
  )
}

export default Footer
