import { SET_GENRE } from "./actions";

const initialState  ="선택 안함";

export const genreReducer = (currentState = initialState, action) => {
  if(action.type === SET_GENRE) {
    return action.genre
  }
  return currentState
}
