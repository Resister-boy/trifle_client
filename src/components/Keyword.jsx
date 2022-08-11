import React from "react";
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

export const MergeKeyword = () => {
  AdjectiveWho(ADJECTIVE_WHO_API);
  AdjectiveOpponent(ADJECTIVE_OPPONENT_API);
  How(HOW_API);
  What(WHAT_API);
  Why(WHY_API); 
  Who(WHO_API); 
  Opponent(OPPONENT_API);
  Where(WHERE_API);
}

const Keyword = () => {
  return (
    <div>
    </div>
  )
}

export default Keyword;