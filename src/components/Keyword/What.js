import axios from "axios";
import { getKeyword } from "../../redux/actions";
import store from "../../redux/store";

export const What = async (WHAT_API) => {
  await axios.get(WHAT_API)
  .then((response) => {
    // console.log('what', response.data.what_name)
    store.dispatch(getKeyword(response.data.what_name))
  })
  .catch((error) => {
    console.log(error)
  });
}