// Constants
import { KEYWORD_EXCEPTIONS } from 'utils/constants';

export const convertToArray = (string) =>
  // eslint-disable-next-line
  string
    .replace(/[\W_]+/g, ' ')
    .split(' ')
    .sort();

export const countEntries = (array, exceptions = []) => {
  const map = {};

  for (let i = 0; i < array.length; i += 1) {
    const item = array[i];
    if (
      // eslint-disable-next-line
      !exceptions.includes(item) &&
      !exceptions.includes(item.toLowerCase())
    ) {
      map[item] = map[item] + 1 || 1;
    }
  }

  return Object.entries(map).map(([key, value]) => ({
    keyword: key,
    count: value,
  }));
};

export const sortByCount = (arr) => {
  const res = [...arr];

  for (let i = 0; i < res.length; i += 1) {
    // Last i elements are already in place
    for (let j = 0; j < res.length - i - 1; j += 1) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (res[j].count < res[j + 1].count) {
        // If the condition is true then swap them
        const temp = res[j];
        res[j] = res[j + 1];
        res[j + 1] = temp;
      }
    }
  }

  return res;
};

export const generateKeywordMap = (str) => {
  if (str === '') {
    return [];
  }

  // Turn the str into a clean array
  const cleanWordArr = convertToArray(str);

  // create a map of every word with its corresponding count
  const wordMap = countEntries(cleanWordArr, KEYWORD_EXCEPTIONS);

  // Sort the word map my the word count
  const sortedWordMap = sortByCount(wordMap);

  return sortedWordMap;
};
