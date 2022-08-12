export const GET_KEYWORD = 'GET_KEYWORD';

export const getKeyword = (keyword) => {
  return {
    type: GET_KEYWORD,
    keyword
  }
} 