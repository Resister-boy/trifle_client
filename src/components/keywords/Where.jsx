import axios from 'axios';
import React, { useState, useEffect } from 'react'
import styles from '../../scss/Keyword.module.scss';


function Where({ sendKeyword }) {
  const [keyword, setKeyword] = useState();
  const apiUrl = `http://localhost:4000/api/where`;

  sendKeyword(keyword)

  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => {
        // console.log(response.data.where_name)
        setKeyword(response.data.where_name)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.where + styles.keyword}>{keyword}</span>
    </div>
  )
}

export default Where;