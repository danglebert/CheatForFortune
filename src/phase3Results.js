import React from 'react';
import { wordGuesser, trimState, confident, skeptical, doubtful } from './util';

const PhaseThree = props => {
  const { calledLetters, words } = props;
  const relevantWords = trimState(words);
  const wordEntries = Object.entries(relevantWords);
{
  {// let first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth;
  // let confidentWords = [];
  // let skepticalWords = [];
  // let doubtfulWords = [];

  // const operableArrays = wordArr => {
  //   for (let i = 0; i < wordArr.length; ++i) {
  //     i === 0 ? first = wordGuesser(wordArr[i][1].value, calledLetters) :
  //     i === 1 ? second = wordGuesser(wordArr[i][1].value, calledLetters) :
  //     i === 2 ? third = wordGuesser(wordArr[i][1].value, calledLetters) :
  //     i === 3 ? fourth = wordGuesser(wordArr[i][1].value, calledLetters) :
  //     i === 4 ? fifth = wordGuesser(wordArr[i][1].value, calledLetters) :
  //     i === 5 ? sixth = wordGuesser(wordArr[i][1].value, calledLetters) :
  //     i === 6 ? seventh = wordGuesser(wordArr[i][1].value, calledLetters) :
  //     i === 7 ? eighth = wordGuesser(wordArr[i][1].value, calledLetters) :
  //     i === 8 ? ninth = wordGuesser(wordArr[i][1].value, calledLetters) :
  //     tenth = wordGuesser(wordArr[i][1].value, calledLetters)
  //   }
  // }
  }

{
  /*
  const confidentFunc = () => {
    // let confidentWords = []

    // Promise.all([confident(first)]).then(values => confidentWords.push(values))
    const firstOne = confident(first).then(values => confidentWords.push(values));
    // confidentWords.push(firstOne)

    // console.log('test: ', await confident(first))

    // await confidentWords.push(confident(second))
    // await confidentWords.push(confident(third))
    // await confidentWords.push(confident(fourth))
    // await confidentWords.push(confident(fifth))
    // await confidentWords.push(confident(sixth))
    // await confidentWords.push(confident(seventh))
    // await confidentWords.push(confident(eighth))
    // await confidentWords.push(confident(ninth))
    // await confidentWords.push(confident(tenth))
    console.log('IN FUNC CONF WORDS: ', confidentWords)
    return firstOne
  }
*/
}
  // operableArrays(wordEntries);
  // const helperFunc = () => {
  //   console.log('before')
  //   confidentFunc().then();
  //   console.log('after')
  // };
  // helperFunc();
  // console.log('HERE: ', confidentWords)


  // wordEntries.map(async word => {
  //   const allPosibilities = wordGuesser(word[1].value, calledLetters);
  //   const answer = await confident(allPosibilities)
  //   return answer;
  // })

  // console.log(wordEntries);
}
  return (
    <div>
      {
        wordEntries.map(word => {
          const allPosibilities = wordGuesser(word[1].value, calledLetters)
          return (
          <div key={word}>
            <p>{`${word[0]} word: `}</p><br />
            <p>It can be... </p>
              <ul>
                {
                  allPosibilities.map(p => <li key={p}>{p}</li>)
                }
              </ul>

          </div>
          )
        }
      )
      }
    </div>
  );
};


export default PhaseThree;
