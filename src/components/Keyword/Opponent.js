import axios from "axios";
import { getKeyword } from "../../redux/actions";
import store from "../../redux/store";

export const Opponent = async (OPPONENT_API) => {
  await axios.get(OPPONENT_API)
  .then((response) => {
    // console.log('opponent', response.data.opponent_name)
    store.dispatch(getKeyword(response.data.opponent_name))
  })
  .catch((error) => {
    console.log(error)
  });
}