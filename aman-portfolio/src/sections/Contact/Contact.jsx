// ============================================================
// Contact — CTA section with links
// ============================================================

import React from 'react';
import styles from './Contact.module.css';

const LINKS = [
  { label: 'Email', value: 'adhikari.80@wright.edu', href: 'mailto:adhikari.80@wright.edu', icon: 'fa-solid fa-envelope', style: 'blue' },
  { label: 'LinkedIn', value: 'aman-adhikari-3b295617b', href: 'https://linkedin.com/in/aman-adhikari-3b295617b', icon: 'fa-brands fa-linkedin', style: 'violet' },
  { label: 'GitHub', value: 'amanadhikari45', href: 'https://github.com/amanadhikari45', icon: 'fa-brands fa-github', style: 'teal' },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.glow} />

      <div className={styles.inner}>
        <div className={styles.tag}>06 — Contact</div>
        <h2 className={styles.heading}>
          Let's <span className="grad-text">Build Together</span>
        </h2>
        <p className={styles.sub}>
          Open to Summer 2026 internships and full-time opportunities in ML Engineering,
          Data Science, and Full-Stack development. CPT Authorized — no sponsorship required.
        </p>

        <div className={styles.cards}>
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className={`${styles.card} ${styles[l.style]}`}
            >
              <i className={l.icon} />
              <div>
                <div className={styles.cardLabel}>{l.label}</div>
                <div className={styles.cardValue}>{l.value}</div>
              </div>
              <i className="fa-solid fa-arrow-right" />
            </a>
          ))}
        </div>

        <div className={styles.badge}>
          <span className="dot-pulse" />
          CPT Authorized · Available Summer 2026 · Dayton, OH (Remote OK)
        </div>
      </div>
    </section>
  );
}
