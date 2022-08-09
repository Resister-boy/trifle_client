import { createStore } from 'redux';
import { keywordReducer } from './reducers';

const store = 
  createStore(keywordReducer);

export default store;