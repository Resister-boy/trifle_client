import axios from 'axios';
import React, { useState, useEffect } from 'react'
import styles from '../../scss/Keyword.module.scss';

function Who({ title }) {
  const [keyword, setKeyword] = useState();
  const apiUrl = `http://localhost:4000/api/who`;

  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => {
        // console.log(response.data.who_name)
        setKeyword(response.data.who_name)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.who}>{keyword}</span>
    </div>
  )
}

export default Who;