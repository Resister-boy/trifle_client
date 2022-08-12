import React from 'react';
import styles from '../scss/Dashboard.module.scss';
import store from '../redux/store';
import { AdjectiveWho } from "./Keyword/AdjectiveWho";
import { AdjectiveOpponent} from "./Keyword/AdjectiveOpponent";
import { How } from "./Keyword/How";
import { What } from "./Keyword/What";
import { Who } from "./Keyword/Who";
import { Why } from "./Keyword/Why";
import { Where } from "./Keyword/Where";
import { Opponent } from "./Keyword/Opponent";

const ADJECTIVE_WHO_API = "http://localhost:4000/api/adjective_who";
const ADJECTIVE_OPPONENT_API = "http://localhost:4000/api/adjective_opponent";
const HOW_API = "http://localhost:4000/api/how";
const WHAT_API = "http://localhost:4000/api/what";
const WHY_API = "http://localhost:4000/api/why";
const WHO_API = "http://localhost:4000/api/who";
const OPPONENT_API = "http://localhost:4000/api/opponent";
const WHERE_API = "http://localhost:4000/api/where";

function getKeyword(showKeyword) {
  AdjectiveWho(ADJECTIVE_WHO_API);
  AdjectiveOpponent(ADJECTIVE_OPPONENT_API);
  How(HOW_API);
  What(WHAT_API);
  Why(WHY_API); 
  Who(WHO_API); 
  Opponent(OPPONENT_API);
  Where(WHERE_API);
  setTimeout(() => {
    showKeyword()
  }, 1000)
}

function showKeyword() {
  console.log(store.getState())
}

function Dashboard() {
  const sentence = store.getState()
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {sentence}
      </div>
      <div className={styles.button_container}>
        <button onClick={getKeyword(() => {
          showKeyword()
        })}>글감찾기</button>
        <button>관련기사</button>
      </div>
    </div>
  )
}

export default Dashboard