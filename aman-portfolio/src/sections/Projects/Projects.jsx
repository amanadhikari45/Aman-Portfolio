// ============================================================
// Projects — showcase with architecture, stack, links
// ============================================================

import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { projects } from '../../data/projects';
import styles from './Projects.module.css';

const ERA_COLORS = {
  ms: styles.eraMs,
  bs: styles.eraBs,
  wip: styles.eraWip,
};

export default function Projects() {
  return (
    <section id="projects">
      <SectionHeader tag="03 — Projects" heading="Featured" highlight="Work" />

      <div className={styles.grid}>
        {projects.map((p) => (
          <div key={p.id} className={`${styles.card} fade-in`}>
            <div className={styles.shine} />

            {p.wip && (
              <div className={styles.wipBanner}>
                <i className="fa-solid fa-code-branch" /> Currently Building · Active Development
              </div>
            )}

            <span className={`${styles.era} ${ERA_COLORS[p.eraType] || ''}`}>{p.era}</span>
            <div className={styles.num}>{p.num} · {p.category}</div>
            <h3 className={styles.title}>{p.title}</h3>
            <p className={styles.desc}>{p.description}</p>

            <ul className={styles.bullets}>
              {p.bullets.map((b, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
              ))}
            </ul>

            {p.architecture && (
              <div className={styles.archBlock}>
                <div className={styles.archLabel}>System Architecture</div>
                <div className={styles.archGrid}>
                  {p.architecture.map((a) => (
                    <div key={a} className={styles.ac}>{a}</div>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.stack}>
              {p.stack.map((s) => (
                <span key={s} className={styles.stag}>{s}</span>
              ))}
            </div>

            <div className={styles.links}>
              {p.links.map((l, i) =>
                l.disabled ? (
                  <span key={i} className={`${styles.plink} ${styles[l.style]} ${styles.disabled}`}>
                    <i className={l.icon} /> {l.label}
                  </span>
                ) : (
                  <a
                    key={i}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`${styles.plink} ${styles[l.style]}`}
                  >
                    <i className={l.icon} /> {l.label}
                  </a>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
