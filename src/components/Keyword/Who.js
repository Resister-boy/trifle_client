import axios from "axios";
import { getKeyword } from "../../redux/actions";
import store from "../../redux/store";

export const Who = async (WHO_API) => {
  await axios.get(WHO_API)
  .then((response) => {
    // console.log('who', response.data.who_name)
    store.dispatch(getKeyword(response.data.who_name))
  })
  .catch((error) => {
    console.log(error)
  });
}