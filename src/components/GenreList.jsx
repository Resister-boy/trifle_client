import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from '../scss/GenreList.module.scss';

function GenreList() {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState();
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

  const getGenre = (event) =>  {
    setSelectedGenre(event.target.value)
    console.log(event.target.value)
  }


  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.genre_container}>
          <span className={styles.title}>장르를 선택하세요</span>
          <select onChange={getGenre} name="Genre" id="" >
            {genres.map((genre, index) => {
              return <option key={index}>{genre.genre_name}</option>
            })}
            <option default >선택 안함</option>
          </select>
        </div>
        <div className={styles.selectedGenre}>
          {!selectedGenre
            ? <span>선택 안함</span>
            : <span>{selectedGenre}</span>}
        </div>
      </div>
    </div>
  )
}

export default GenreList