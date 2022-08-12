import axios from "axios";
import { getKeyword } from "../../redux/actions";
import store from "../../redux/store";

export const AdjectiveOpponent = async (ADJECTIVE_OPPONENT_API) => {
  await axios.get(ADJECTIVE_OPPONENT_API)
  .then((response) => {
    // console.log('adjective_opponent', response.data.opponent_adjective_name)
    store.dispatch(getKeyword(response.data.opponent_adjective_name))
  })
  .catch((error) => {
    console.log(error)
  });
}