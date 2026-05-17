// ============================================================
// Footer — site footer
// ============================================================

import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>⟨ Aman Adhikari /⟩</div>
        <p className={styles.copy}>
          Built with React · Deployed on Netlify ·{' '}
          <span className={styles.grad}>Open to Opportunities</span>
        </p>
        <div className={styles.socials}>
          <a href="https://github.com/amanadhikari45" target="_blank" rel="noreferrer" className={styles.icon}>
            <i className="fa-brands fa-github" />
          </a>
          <a href="https://linkedin.com/in/aman-adhikari-3b295617b" target="_blank" rel="noreferrer" className={styles.icon}>
            <i className="fa-brands fa-linkedin" />
          </a>
          <a href="mailto:adhikari.80@wright.edu" className={styles.icon}>
            <i className="fa-solid fa-envelope" />
          </a>
        </div>
      </div>
    </footer>
  );
}
