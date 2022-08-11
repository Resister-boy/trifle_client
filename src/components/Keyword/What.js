import axios from "axios";

export const What = async (WHAT_API) => {
  await axios.get(WHAT_API)
  .then((response) => {
    // console.log('what', response.data.what_name)
  })
  .catch((error) => {
    console.log(error)
  });
}