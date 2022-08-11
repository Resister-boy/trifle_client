import axios from "axios";

export const Where = async (WHERE_API) => {
  await axios.get(WHERE_API)
  .then((response) => {
    // console.log('how', response.data.where_name)
  })
  .catch((error) => {
    console.log(error)
  });
}