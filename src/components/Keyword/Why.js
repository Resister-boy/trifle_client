import axios from "axios";

export const Why = async (WHY_API) => {
  await axios.get(WHY_API)
  .then((response) => {
    // console.log('why', response.data.why_name)
  })
  .catch((error) => {
    console.log(error)
  });
}