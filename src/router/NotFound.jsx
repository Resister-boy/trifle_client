import React from 'react';
import styles from '../scss/NotFound.module.scss';

function NotFound() {
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.title}>Page</span><br /> 
        <span className={styles.subTitle}>NotFound</span></div>
    </div>
  )
}

export default NotFound