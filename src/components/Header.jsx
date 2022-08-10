import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../scss/Header.module.scss';
import Logo from './Logo';

function Header() {
  const isActive = useLocation();
  // console.log(isActive)
  // console.log(isActive.pathname === '/about')

  return (
    <header className={styles.container}>
      <div className={styles.inner}>
        <Link 
          to="/" 
          className={styles.title}>
            <Logo />
          </Link>
        <div className={styles.nav_container}>
          <Link 
            to="/"
            className={isActive.pathname === '/' 
              ? styles.active_item 
              : styles.nav_item}  >
            Home
          </Link>
          <Link
            to="/about" 
            className={isActive.pathname === '/about' 
              ? styles.active_item 
              : styles.nav_item}>
            About
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header