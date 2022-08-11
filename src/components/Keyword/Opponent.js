import axios from "axios";

export const Opponent = async (OPPONENT_API) => {
  await axios.get(OPPONENT_API)
  .then((response) => {
    // console.log('opponent', response.data.opponent_name)
  })
  .catch((error) => {
    console.log(error)
  });
}