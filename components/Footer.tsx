import React from 'react';
import styles from '../styles/2-components/footer.module.scss';

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <ul className={styles.socials}>
        <li>
          <a href="/" aria-label="Twitter">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="/" aria-label="Dribble">
            <i className="fa fa-dribbble" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="/" aria-label="Instagram">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="/" aria-label="LinkedIn">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
      <p className={styles.credits}>
        <div>© Nikki Kiga 2020</div>
      </p>
    </footer>
  );
};

export default Footer;
