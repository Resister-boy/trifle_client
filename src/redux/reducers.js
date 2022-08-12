import { GET_KEYWORD } from './actions';

const initialState = [];
export const trifleApp = (currentState = initialState, action) => {
  if(action.type === GET_KEYWORD) {
    return [...currentState, action.keyword];
  } 
  return currentState;
}