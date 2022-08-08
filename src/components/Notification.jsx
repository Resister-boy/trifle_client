import React from 'react';
import styles from '../scss/Notification.module.scss';

function Notification() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <ol>
          <li>글감 찾기 버튼을 눌러 랜덤 글감을 찾을 수 있습니다</li>
          <li>마음에 드는 글감이 나올 때까지 계속해서 버튼을 눌러보세요</li>
          <li>마음에 드는 글감이 나오면 꼭 저장 버튼을 눌러주세요</li>
        </ol>
      </div>
    </div>
  )
}

export default Notification