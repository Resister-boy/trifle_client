import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../scss/Header.module.scss';

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.inner}>
        <Link 
          to="/" 
          className={styles.title}>Trifle</Link>
        <div className={styles.nav_container}>
          <Link 
            to="/"
            className={styles.nav_item}>
            Home
          </Link>
          <Link
            to="/about" 
            className={styles.nav_item}>
            About
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header