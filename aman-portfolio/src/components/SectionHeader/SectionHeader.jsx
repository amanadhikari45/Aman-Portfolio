// ============================================================
// SectionHeader — reusable section tag + heading
// ============================================================

import React from 'react';
import styles from './SectionHeader.module.css';

export default function SectionHeader({ tag, heading, highlight }) {
  return (
    <div>
      <div className={styles.tag}>{tag}</div>
      <h2 className={styles.heading}>
        {heading}{' '}
        {highlight && <span className="grad-text">{highlight}</span>}
      </h2>
    </div>
  );
}
