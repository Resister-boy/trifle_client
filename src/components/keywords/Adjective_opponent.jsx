import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from '../../scss/Keyword.module.scss';

function Adjective_opponent({ sendKeyword }) {
  const [keyword, setKeyword] = useState();
  const apiUrl = `http://localhost:4000/api/adjective_opponent`;

  sendKeyword(keyword)

  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => {
        // console.log(response.data.opponent_adjective_name);
        setKeyword(response.data.opponent_adjective_name)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <div className={styles.container}>
      <span className={styles.adjective_opponent}>{keyword}</span>
    </div>
  ) 
}

export default Adjective_opponent