import React from 'react';
import { wordGuesser, trimState, confident, skeptical, doubtful } from './util';

const PhaseThree = props => {
  const { calledLetters, words } = props;
  const relevantWords = trimState(words);
  const wordEntries = Object.entries(relevantWords);

  return (
    <div>
      {wordEntries.map(word => {
        const allPosibilities = wordGuesser(word[1].value, calledLetters);
        const confidentLine =
          allPosibilities.length === 1 ? 'definitely' : 'likely';
        return (
          <div className="single-word-result" key={word}>
            <p>{`The ${word[0]} word is ${confidentLine}: `}</p>
            <ul id="results">
              {allPosibilities.map(p => (
                <li id="result-word" key={p}>
                  {p[0].toUpperCase() + p.slice(1)}
                </li>
              ))}
            </ul>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default PhaseThree;
