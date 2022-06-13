import React from 'react'
import styles from '../styles/gallery.module.css';

export default function Gallery() {
  return (
    <div>
      <div className={styles.gallery}>
        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/1_1_2.jpeg" />
        </div>

        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/1_2.jpg" />
        </div>

        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/3_4.jpeg" />
        </div>

        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/Chips.jpeg" />
        </div>

        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/M_sand.jpeg" />
        </div>

        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/P_sand.jpeg" />
        </div>

      </div>
    </div>
  );
}
