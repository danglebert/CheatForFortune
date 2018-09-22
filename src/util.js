const wordsObj = require('./words')
const axios = require('axios');

export const wordGuesser = (word, calledLetters) => {
  let firstPhase = [];
  let wordLength = word.length;
  let wordsWithSameLength = wordsObj[wordLength]
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
        if (wordStr[j] === '_' && calledLetters.toLowerCase().indexOf(letter) > -1) {
          toggle = false;
        }
      }
      if (toggle) secondPhase.push(currentWord);
    }
    return secondPhase;
  }
  return firstPhase;
};

const wordFreq = async (word) => {
  const freq = await axios.get(`https://wordsapiv1.p.mashape.com/words/${word}/frequency`, {
    headers: {
      "X-Mashape-Key" : "NySU7zCYDEmshUbX4CttzN7H5FLxp1muDP9jsnYptWiPr7sS9M",
      "X-Mashape-Host" : "wordsapiv1.p.mashape.com"
    }
  })
  const returnVal = freq.data.frequency ? freq.data.frequency.perMillion : null;
  return returnVal;
};


// this is BAD -- cannot async filter!!

// export const confident = (wordArr) => wordArr.filter(async word =>{
//   const testVar = await wordFreq(word);
//   console.log('IN LOOP: ', typeof testVar)
//   if (await wordFreq(word) > 50) return word;
// });


export const confident = async wordArr => {
  let answer = [];
  for (let word of wordArr) {
    // console.log('WORD ARRAY: ', wordArr)
    // console.log('WORD ELEM: ', word)
    if (await wordFreq(word) > 50) answer.push(word);
  }
  return answer
}

export const skeptical = async (wordArr) => {
  let answer = [];
  for (let word of wordArr) {
    if (await wordFreq(word) < 50 && await wordFreq(word) > 1) answer.push(word);
  }
  return answer
}

export const doubtful = async (wordArr) => {
  let answer = [];
  for (let word of wordArr) {
    if (await wordFreq(word) < 1) answer.push(word);
  }
  return answer
}

// skeptical(['Truck', 'Track', 'Trick']).then(possibilities => {
//   console.log(possibilities);
// })

// const secondTest = async () => console.log('second test: ', await doubtful(['hello', 'the', 'intricate', 'uncanny', 'fyrd' ]));

// secondTest();

// console.log(wordGuesser('ki_chen', "RSTLNE"));

const orderWords = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth', 'Eleventh', "Twelfth", 'Thirteenth', 'Fourteenth', 'Fifteenth', 'Sixteenth', 'Seventeenth', 'Eighteenth', 'Nineteenth', 'Twentieth'];

export const createTable = num => {
  let answer = [];
  for (let i = 0; i < num; ++i) {
    answer.push(orderWords[i]);
  }
  return answer;
}

export const trimState = (obj) => {
  const trim = {};
  for (let key in obj) {
    if (obj[key] !== null && key !== 'phase' && key !== 'wordCount' && key !== 'calledLetters') trim[key] = obj[key]
  }
  return trim;
}

export const combiner = (arr, name) => {
  let ans = '';

  for (let i = 0; i < arr.length; ++i) {
    let elem = arr[i].value;
    if (elem === '') ans += '_';
    else ans += elem;
  }

  return ans;
}




