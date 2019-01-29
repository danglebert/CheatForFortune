const wordsObj = require('./words');

export const wordGuesser = (word, calledLetters) => {
  let firstPhase = [];
  let wordLength = word.length;
  let wordsWithSameLength = wordsObj[wordLength];
  let wordStr = word.toLowerCase();

  for (let i = 0; i < wordsWithSameLength.length; ++i) {
    let currentWord = wordsWithSameLength[i].toLowerCase();
    let toggle = true;

    for (let j = 0; j < wordLength; ++j) {
      if (wordStr[j] !== currentWord[j] && wordStr[j] !== '_') toggle = false;
    }
    if (toggle) firstPhase.push(currentWord);
  }

  if (calledLetters) {
    let secondPhase = [];

    for (let i = 0; i < firstPhase.length; ++i) {
      let toggle = true;
      let currentWord = firstPhase[i];

      for (let j = 0; j < wordLength; ++j) {
        let letter = currentWord[j];
        if (
          wordStr[j] === '_' &&
          calledLetters.toLowerCase().indexOf(letter) > -1
        ) {
          toggle = false;
        }
      }
      if (toggle) secondPhase.push(currentWord);
    }
    return secondPhase;
  }
  return firstPhase;
};

const orderWords = [
  'First',
  'Second',
  'Third',
  'Fourth',
  'Fifth',
  'Sixth',
  'Seventh',
  'Eighth',
  'Ninth',
  'Tenth',
  'Eleventh',
  'Twelfth',
  'Thirteenth',
  'Fourteenth',
  'Fifteenth',
  'Sixteenth',
  'Seventeenth',
  'Eighteenth',
  'Nineteenth',
  'Twentieth'
];

export const createTable = num => {
  let answer = [];
  for (let i = 0; i < num; ++i) {
    answer.push(orderWords[i]);
  }
  return answer;
};

export const trimState = obj => {
  const trim = {};
  for (let key in obj) {
    if (
      obj[key] !== null &&
      key !== 'phase' &&
      key !== 'wordCount' &&
      key !== 'calledLetters'
    )
      trim[key] = obj[key];
  }
  return trim;
};

export const combiner = (arr, name) => {
  let ans = '';

  for (let i = 0; i < arr.length; ++i) {
    let elem = arr[i].value;
    if (elem === '') ans += '_';
    else ans += elem;
  }

  return ans;
};
