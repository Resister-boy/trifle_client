import axios from "axios";
import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  keywords: {
    loading: false,
    data: null,
    error: null
  }
};

const loadingState = {
  loading: true,
  data: null,
  error: null
};

const success = (data) => ({
  loading: false,
  data,
  error: null
});

const error = (error) =>({
  loading: false,
  data: null,
  error
});

function keywordReducer(state, action) {
  switch (action.type) {
    case 'GET_KEYWORDS' :
      return {
        ...state,
        keywords: loadingState
      };
    case 'GET_KEYWORDS_SUCCESS':
      return  {
        ...state,
        keywords: success(action.data)
      };
    case 'GET_KEYWORDS_ERROR':
      return {
        ...state,
        keywords: error(action.error)
      }
    default: 
      throw new Error('Unhandled action type', action.type)
  } 
}

const KeywordsStateContext = createContext(null);
const KeywordsDispatchContext = createContext(null);

export function KeywordsProvider({ children }) {
  const [state, dispatch] = useReducer(keywordReducer, initialState);
  return (
    <KeywordsStateContext.Provider value={state}>
      <KeywordsDispatchContext.Provider value={dispatch}>
        { children }
      </KeywordsDispatchContext.Provider>
    </KeywordsStateContext.Provider>
  )
}

export function useKeywordState() {
  const state = useContext(KeywordsStateContext);
  if (!state) {
    throw new Error('Can not find Keyword Provider');
  }
  return state;
}

export function useKeywordDispatch() {
  const dispatch = useContext(KeywordsDispatchContext);
  if (!dispatch) {
    throw new Error('Can not find Keyword Provider');
  }
  return dispatch;
}

export async function getKeywords(dispatch) {
  dispatch({ type: 'GET_KEYWORDS' });
  try {
    const sentence = [];
    // Adjective Who
    const response_adjective_who = await axios.post('http://localhost:4000/api/adjective_who', {
      genre: '드라마'
    });
    sentence.push(response_adjective_who.data.who_adjective_name);

    // Who
    const response_who = await axios.post('http://localhost:4000/api/who');
    sentence.push(response_who.data.who_name);

    // Where
    const response_where = await axios.post('http://localhost:4000/api/where');
    sentence.push(`${response_where.data.where_name}에서`);

    // Why
    const response_why = await axios.post('http://localhost:4000/api/why');
    sentence.push(response_why.data.why_name);

    // Adjective Opponent
    const response_adjective_opponent = await axios.post('http://localhost:4000/api/adjective_opponent');
    sentence.push(response_adjective_opponent.data.opponent_adjective_name)

    // Opponent
    const response_opponent = await axios.post('http://localhost:4000/api/opponent');
    sentence.push(response_opponent.data.opponent_name);

    // How
    const response_how = await axios.post('http://localhost:4000/api/how');
    sentence.push(response_how.data.how_name);

    dispatch({
      type: 'GET_KEYWORDS_SUCCESS',
      data: sentence
    });
    console.log(sentence)
  } catch (error) {
    dispatch({
      type: 'GET_KEYWORDS_ERROR',
      error: error
    });
  }
}

export async function getKeyword(dispatch) {
  dispatch({ type: 'GET_KEYWORD' });
  try {
    const response = await axios.get('http://localhost:4000/api/adjective_who');
    dispatch({
      type: 'GET_KEYWORD_SUCCESS',
      data: response.data
    });
  } catch (error) {
    dispatch({
      type: 'GET_KEYWORD_ERROR',
      error: error
    });
  }
}