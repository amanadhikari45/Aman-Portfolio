// ============================================================
// Skills — categorized tech stack grid
// ============================================================

import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { skillCategories } from '../../data/skills';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills">
      <SectionHeader tag="02 — Skills" heading="Technical" highlight="Arsenal" />

      <div className={styles.grid}>
        {skillCategories.map((cat) => (
          <div key={cat.id} className={`${styles.category} fade-in`}>
            <div className={styles.catLabel}>
              <i className={cat.icon} />
              {cat.label}
            </div>
            <div className={styles.pills}>
              {cat.skills.map((skill) => (
                <span key={skill.name} className={styles.pill}>
                  <i className={skill.icon} />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
