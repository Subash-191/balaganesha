import React from 'react'
import styles from '../styles/gallery.module.css';

export default function Gallery() {
  return (
    <div>
      {" "}
      <h1 style={{ textAlign: "center" }}>Our Products</h1>
      <div className={styles.gallery}>
        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/1_1_2.jpeg" />
          <span className={styles.caption}>3/2 Jally</span>
        </div>

        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/M_sand.jpeg" />
          <span className={styles.caption}>M-sand</span>
        </div>

        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/3_4.jpeg" />
          <span className={styles.caption}>3/4 Jally</span>
        </div>

        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/Chips.jpeg" />
          <span className={styles.caption}>Chips</span>
        </div>

        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/P_sand.jpeg" />
          <span className={styles.caption}>P-sand</span>
        </div>

        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/1_2.jpg" />
          <span className={styles.caption}>1/2 Jally</span>
        </div>
      </div>
    </div>
  );
}
