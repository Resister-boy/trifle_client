import axios from "axios";
import { getKeyword } from "../../redux/actions";
import store from "../../redux/store";

export const AdjectiveWho = async (ADJECTIVE_WHO_API) => {
  await axios.get(ADJECTIVE_WHO_API)
  .then((response) => {
    // console.log('adjective_who', response.data.who_adjective_name)
    store.dispatch(getKeyword(response.data.who_adjective_name))
  })
  .catch((error) => {
    console.log(error)
  });
}