import axios from "axios";
import { getKeyword } from "../../redux/actions";
import store from "../../redux/store";

export const How = async (HOW_API) => {
  await axios.get(HOW_API)
  .then((response) => {
    // console.log('how', response.data.how_name)
    store.dispatch(getKeyword(response.data.how_name))
  })
  .catch((error) => {
    console.log(error)
  });
}