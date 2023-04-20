import React from 'react';
import styles from '../styles/2-components/footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <ul className={styles.socials}>
        <li>
          <Link href="/" aria-label="Twitter">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link href="/" aria-label="Dribble">
            <i className="fa fa-dribbble" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link href="/" aria-label="Instagram">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link href="/" aria-label="LinkedIn">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </Link>
        </li>
      </ul>
      <div className={styles.credits}>
        <span>© Nikki Kiga 2020</span>
      </div>
    </footer>
  );
};

export default Footer;
