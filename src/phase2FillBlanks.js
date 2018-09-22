import React from 'react';
import { trimState, createTable } from './util';

const PhaseTwo = props => {
  const { state, handleSecondSubmit } = props;
  const newState = trimState(state);
  const newStateEntries = Object.entries(newState);

  return (
    <div className="center">
      <div className="fill-in-letter-form-div">
        <form autoComplete="off" className="fill-in-letter-form" onSubmit={handleSecondSubmit}>
          {newStateEntries.map(word => (
            <div key={word[0]}>
              <div className="word-blocks">
                {createTable(word[1].length).map(elem => (
                  <input
                    className="single-letter-input"
                    key={elem}
                    name={`${word[0]}`}
                    type="text"
                  />
                ))}
              </div>
            </div>
          ))}
          <div className="prev-letters-area">
            <p>Previously called letters: </p>
            <input type="text" className="prev-letters-input" name="calledLetters" />
            <button className="prev-letters-sub"type="submit">Show me the results!</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PhaseTwo;
