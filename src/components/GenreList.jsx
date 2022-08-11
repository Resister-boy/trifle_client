import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from '../scss/GenreList.module.scss';

function GenreList() {
  const [genres, setGenres] = useState([]);
  const apiUrl = 'http://localhost:4000/api/genre';

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        // console.log(response.data)
        setGenres(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])


  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <span className={styles.title}>장르를 선택하세요</span>
        <select name="Genre" id="">
          {genres.map((genre, index) => {
            return <option key={index}>{genre.genre_name}</option>
          })}
          <option>선택 안함</option>
        </select>
      </div>
    </div>
  )
}

export default GenreList