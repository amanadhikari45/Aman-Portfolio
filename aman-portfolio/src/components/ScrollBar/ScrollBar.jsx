// ============================================================
// ScrollBar — fixed top progress bar
// ============================================================

import React from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import styles from './ScrollBar.module.css';

export default function ScrollBar() {
  const progress = useScrollProgress();

  return (
    <div
      className={styles.scrollBar}
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}
