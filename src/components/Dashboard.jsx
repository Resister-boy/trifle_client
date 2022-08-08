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
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <AdjectiveWho title="Adjective_who" />
        <Who title="Who" />
        <Where title="Where" />
        <What title="What" />
        <AdjectiveOpponent title="Adjective_opponent" />
        <Opponent title="Opponent" />
        <Why title="Why" />
        <How title="How" />
      </div>
    </div>
  )
}

export default Dashboard