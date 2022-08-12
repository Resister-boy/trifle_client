import axios from "axios";
import { getKeyword } from "../../redux/actions";
import store from "../../redux/store";

export const Where = async (WHERE_API) => {
  await axios.get(WHERE_API)
  .then((response) => {
    // console.log('how', response.data.where_name)
    store.dispatch(getKeyword(response.data.where_name))
  })
  .catch((error) => {
    console.log(error)
  });
}