import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from '../../scss/Keyword.module.scss';

function Why({ sendKeyword }) {
  const [keyword, setKeyword] = useState();
  const apiUrl = `http://localhost:4000/api/why`;

  sendKeyword(keyword)

  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => {
        // console.log(response.data.why_name)
        setKeyword(response.data.why_name)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.why}>{keyword}</span>
    </div>
  )
}

export default Why;