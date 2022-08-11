import React from 'react';
import styles from '../scss/Dashboard.module.scss';
import Keyword from './Keyword';

function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Keyword />
      </div>
      <div className={styles.button_container}>
        <button>글감찾기</button>
        <button>관련기사</button>
      </div>
    </div>
  )
}

export default Dashboard