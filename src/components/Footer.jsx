import React from 'react';
import styles from '../scss/Footer.module.scss';

function Footer() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.logo}>Trifle</div>
        <div className={styles.copyright}>ⓒ{ new Date().getFullYear() } Trifle.com</div>
      </div>
    </div>
  )
}

export default Footer