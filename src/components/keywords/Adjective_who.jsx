import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from '../../scss/Keyword.module.scss';

function Adjective_who({ title }) {
  const [keyword, getKeyword] = useState();
  const apiUrl = `http://localhost:4000/api/adjective_who`;

  // const randomNumber = () => {
    
  // }

  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => {
        // console.log(response.data.who_adjective_name)
        getKeyword(response.data.who_adjective_name)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className={styles.container}>
      <span className={styles.adjective_who}>{keyword}</span>
    </div>
  )
}

export default Adjective_who;