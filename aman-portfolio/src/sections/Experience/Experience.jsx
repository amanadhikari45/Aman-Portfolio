// ============================================================
// Experience — timeline layout
// ============================================================

import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { experiences } from '../../data/experience';
import styles from './Experience.module.css';

const TYPE_STYLES = {
  blue:   styles.typeBlue,
  violet: styles.typeViolet,
  teal:   styles.typeTeal,
};

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <SectionHeader tag="04 — Experience" heading="Professional" highlight="Journey" />

      <div className={styles.timeline}>
        {experiences.map((exp) => (
          <div key={exp.id} className={`${styles.item} fade-in`}>
            <div className={styles.line} />
            <div className={styles.dot} />

            <div className={styles.left}>
              <span className={styles.date}>{exp.date}</span>
              <div className={styles.org}>{exp.org}</div>
            </div>

            <div className={styles.right}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.title}>{exp.title}</div>
                  <div className={`${styles.type} ${TYPE_STYLES[exp.typeColor]}`}>
                    <i className={exp.typeIcon} /> {exp.type}
                  </div>
                </div>
                <ul className={styles.bullets}>
                  {exp.bullets.map((b, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
