import React from 'react';
import styles from '../scss/Dashboard.module.scss';
import AdjectiveWho from './keywords/Adjective_who';
import AdjectiveOpponent from './keywords/Adjective_opponent';
import Opponent from './keywords/Opponent';
import How from './keywords/How';
import What from './keywords/What';
import Where from './keywords/Where';
import Who from './keywords/Who';
import Why from './keywords/Why';
import store from '../redux/store';
import { getKeyword } from '../redux/actions'

function Dashboard() {
  const getAdW  = (keyword) => {
    keyword !== undefined 
      ? store.dispatch(getKeyword(keyword))
      : console.log(keyword)
  };
  const getAdO  = (keyword) => {
    store.dispatch(getKeyword(keyword))
    console.log(store.getState())
  };
  const getHow  = (keyword) => {
    store.dispatch(getKeyword(keyword))
  };
  const getWhy = (keyword) => {
    store.dispatch(getKeyword(keyword))
  };
  const getWho  = (keyword) => {
    store.dispatch(getKeyword(keyword))
  };
  const getWhat  = (keyword) => {
    store.dispatch(getKeyword(keyword))
  };
  const getWhere  = (keyword) => {
    store.dispatch(getKeyword(keyword))
  };
  const getOpponent  = (keyword) => {
    store.dispatch(getKeyword(keyword))
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <AdjectiveWho sendKeyword={getAdW}/>
        <Who sendKeyword={getWho} />
        <Where sendKeyword={getWhere}/>
        <What sendKeyword={getWhat} />
        <AdjectiveOpponent sendKeyword={getAdO}/>
        <Opponent sendKeyword={getOpponent} />
        <Why sendKeyword={getWhy} />
        <How sendKeyword={getHow} />
      </div>
      <div className={styles.button_container}>
        <button>글감찾기</button>
        <button>관련기사</button>
      </div>
    </div>
  )
}

export default Dashboard