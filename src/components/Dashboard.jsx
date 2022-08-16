import React, { useState } from 'react';
import axios from 'axios';
import { getKeywords } from '../context/KeywordContext';
import { useKeywordState, useKeywordDispatch } from '../context/KeywordContext';
import styles from '../scss/Dashboard.module.scss';
import { CUSTOM_SEARCH_API_KEY, SEARCH_ENGINE_ID } from "../data/data";

function Dashboard() {
  const state = useKeywordState();
  const dispatch = useKeywordDispatch();
  const [articles, setArticles] = useState([]);
  const { loading, data: keywords, error } = state.keywords;

  if(loading) return <div>로딩 중</div>
  if(error) return <div>에러 발생</div>

  const fatchData = () => {
    getKeywords(dispatch)
  }

  const getSearchResult = () => {
    if(keywords !== null) {
      console.log(CUSTOM_SEARCH_API_KEY)
      const apiUrl = `https://customsearch.googleapis.com/customsearch/v1?key=${CUSTOM_SEARCH_API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${keywords[1]}`;
      axios.get(apiUrl)
        .then((response) => {
          console.log(response.data)
          setArticles(response.data.items)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }


  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.sentence_container}>
          {keywords 
            ? <span className={styles.sentence}>{keywords.join().replace(/,/g, " ")}하는 이야기</span>
            : <span className={styles.notification}>글감 찾기 버튼을 눌러 여러분의 글감을 찾아보세요!</span> }
        </div>
      </div>
      <div className={styles.button_container}>
        <button onClick={fatchData}>글감찾기</button>
        <button onClick={getSearchResult}>관련기사</button>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Dashboard