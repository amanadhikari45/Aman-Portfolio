// ============================================================
// Cursor — custom animated cursor (desktop only)
// ============================================================

import React from 'react';
import { useCursor } from '../../hooks/useCursor';
import styles from './Cursor.module.css';

export default function Cursor() {
  useCursor();

  return (
    <>
      <div id="cursor-dot" className={styles.dot} />
      <div id="cursor-ring" className={styles.ring} />
    </>
  );
}
