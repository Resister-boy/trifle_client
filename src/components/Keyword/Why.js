import axios from "axios";
import { getKeyword } from "../../redux/actions";
import store from "../../redux/store";

export const Why = async (WHY_API) => {
  await axios.get(WHY_API)
  .then((response) => {
    // console.log('why', response.data.why_name)
    store.dispatch(getKeyword(response.data.why_name))
  })
  .catch((error) => {
    console.log(error)
  });
}