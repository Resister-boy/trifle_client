import axios from "axios";

export const How = async (HOW_API) => {
  await axios.get(HOW_API)
  .then((response) => {
    // console.log('how', response.data.how_name)
  })
  .catch((error) => {
    console.log(error)
  });
}