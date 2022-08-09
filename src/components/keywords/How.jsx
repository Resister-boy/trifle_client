import axios from 'axios';
import React, { useState, useEffect } from 'react'
import styles from '../../scss/Keyword.module.scss';

function How({ sendKeyword }) {
  const [keyword, setKeyword] = useState();
  const apiUrl = `http://localhost:4000/api/how`;

  sendKeyword(keyword)

  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => {
        // console.log(response.data.how_name)
        setKeyword(response.data.how_name)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <div className={styles.container}>
      <span className={styles.how}>{keyword}하는 이야기</span>
    </div>
  )
}

export default How