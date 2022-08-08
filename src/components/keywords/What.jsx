import axios from 'axios';
import React, { useState, useEffect } from 'react'
import styles from '../../scss/Keyword.module.scss';

function What({ title }) {
  const [keyword, setKeyword] = useState();
  const apiUrl = `http://localhost:4000/api/what`;

  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => {
        // console.log(response.data.what_name)
        setKeyword(response.data.what_name)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.what}>{keyword}</span>
    </div>
  )
}

export default What