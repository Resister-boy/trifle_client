import { GET_KEYWORD } from './actions';

const initialState = [];

export const keywordReducer = (currentState = initialState, action) => {
  if(action.type === GET_KEYWORD) {
    return [{ keyword: action.keyword, done: false}];
  }
  return currentState
}