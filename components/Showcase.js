import React from 'react';
import styles from '@/styles/scss/Showcase.module.scss';

// Displays an image and the text shown
export default function Showcase() {
  return (
    <div className={styles.showcase}>
      <h1>Welcome to the party</h1>
      <h2>Find hottest DJ events</h2>
    </div>
  );
}
