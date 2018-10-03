import React from 'react';
import { createTable, wordInfo } from './util';

const PhaseOne = props => {
  const { handleChangeWords, handleFirstSubmit, wordCount } = props;
  const maxWords = 4;

  return (
    <div>
      <form onSubmit={handleFirstSubmit}>
        <label className="question">How many words are there?</label>
        <br />
        <input
          className="number-words-input"
          type="number"
          name="wordCount"
          min="1"
          max="4"
          onChange={handleChangeWords}
        />
        <br />

        {wordCount ? (
          <div>
            <p>How many letters in each word?</p>
            <div className="all-letter-inputs">
              {createTable(wordCount)
                .map(elem => (
                  <div key={elem}>
                    <label>{elem}: </label>
                    <input
                      className="number-letters-input"
                      type="number"
                      name={elem}
                      min="1"
                      max="12"
                    />
                  </div>
                ))
                .slice(0, maxWords)}
              <button type="submit" className='submit'>Next</button>
            </div>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default PhaseOne;

// backup plan
// {wordCount ? (
//   <div>
//     <p>Tell me what you know about each word: </p>
//     {createTable(wordCount)
//       .map(elem => (
//         <div key={elem}>
//           <label>{elem}: </label>
//           <input type="text" name={elem} />
//         </div>
//       ))
//       .slice(0, maxWords)}
//     <button type="submit">Submit</button>
//   </div>
// ) : null}
