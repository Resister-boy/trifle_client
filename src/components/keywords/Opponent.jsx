import axios from 'axios';
import React, { useState, useEffect } from 'react'
import styles from '../../scss/Keyword.module.scss';

function Opponent({ sendKeyword }) {
  const [keyword, setKeyword] = useState();
  const apiUrl = `http://localhost:4000/api/opponent`;

  sendKeyword(keyword)

  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => {
        // console.log(response.data.opponent_name)
        setKeyword(response.data.opponent_name)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <div className={styles.container}>
      <span className={styles.opponent}>{keyword}</span>
    </div>
  )
}

export default Opponent