import axios from "axios";

export const Who = async (WHO_API) => {
  await axios.get(WHO_API)
  .then((response) => {
    // console.log('who', response.data.who_name)
  })
  .catch((error) => {
    console.log(error)
  });
}