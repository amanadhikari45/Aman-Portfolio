// ============================================================
// Education — academic background cards
// ============================================================

import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { education } from '../../data/education';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education">
      <SectionHeader tag="05 — Education" heading="Academic" highlight="Foundation" />

      <div className={styles.grid}>
        {education.map((edu) => (
          <div key={edu.id} className={`${styles.card} fade-in`}>
            <div className={styles.iconWrap}>
              <i className={edu.icon} />
            </div>

            <div className={styles.degree}>{edu.degree}</div>
            <div className={styles.school}>{edu.school}</div>

            <div className={styles.year}>
              <i className="fa-solid fa-calendar-days" /> {edu.year}
            </div>

            {edu.cpt && (
              <div className={styles.cpt}>
                <i className="fa-solid fa-passport" /> CPT Authorized · Transitions to OPT Post-Graduation
              </div>
            )}

            <ul className={styles.courses}>
              {edu.courses.map((c, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: c }} />
              ))}
            </ul>

            {edu.note && (
              <div className={`${styles.note} ${styles[edu.noteType]}`}>
                <i className={edu.noteType === 'warning' ? 'fa-solid fa-fire' : 'fa-solid fa-star'} />
                {edu.note}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
