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

function Dashboard() {
  const getAdW  = (keyword) => {
    console.log('Adjective Who', keyword)  
  };
  const getAdO  = (keyword) => {
    console.log('Adjective Opponent', keyword)  
  };
  const getHow  = (keyword) => {
    console.log('How', keyword)  
  };
  const getWhy = (keyword) => {
    console.log('Why', keyword)  
  };
  const getWho  = (keyword) => {
    console.log('Who', keyword)  
  };
  const getWhat  = (keyword) => {
    console.log('What', keyword)  
  };
  const getWhere  = (keyword) => {
    console.log('Where', keyword)  
  };
  const getOpponent  = (keyword) => {
    console.log('Opponent', keyword)  
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
    </div>
  )
}

export default Dashboard