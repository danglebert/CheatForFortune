import React, { Component } from 'react';
import { createTable } from './util';

export default class HowManyWords extends Component {
  constructor() {
    super();
    this.state = {
      phase: 1,
      wordCount: 0,
      First: null,
      Second: null,
      Third: null,
      Fourth: null,
      Fifth: null,
      Sixth: null,
      Seventh: null,
      Eighth: null,
      Ninth: null,
      Tenth: null,
    };
    this.handleChangeWords = this.handleChangeWords.bind(this);
    this.handleChangeLetters = this.handleChangeLetters.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleChangeWords(event) {
    const wordCount = Number(event.target.value);
    await this.setState({ wordCount });
    console.log(this.state);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const wordCount = Number(event.target.wordCount.value);
    const phase = 2;
    const First = event.target.First ? Number(event.target.Fifth.value) : null;
    const Second = event.target.Second ? Number(event.target.Fifth.value) : null;
    const Third = event.target.Third ? Number(event.target.Fifth.value) : null;
    const Fourth = event.target.Fourth ? Number(event.target.Fifth.value) : null;
    const Fifth = event.target.Fifth ? Number(event.target.Fifth.value) : null;
    const Sixth = event.target.Sixth ? Number(event.target.Fifth.value) : null;
    const Seventh = event.target.Seventh ? Number(event.target.Fifth.value) : null;
    const Eighth = event.target.Eighth ? Number(event.target.Fifth.value) : null;
    const Ninth = event.target.Ninth ? Number(event.target.Fifth.value) : null;
    const Tenth = event.target.Tenth ? Number(event.target.Fifth.value) : null;
    wordCount !== '' && (await this.setState({ phase, wordCount, First, Second, Third, Fourth, Fifth, Sixth, Seventh, Eighth, Ninth, Tenth }));
  }

  render() {
    const { wordCount } = this.state;
    const maxWords = 10
    return (
      phase === 1 ?
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>How many words are there?</label>
          <br />
          <input
            type="number"
            name="wordCount"
            min="1"
            max="10"
            onChange={this.handleChangeWords}
          />
          <br />

          {this.state.wordCount ? (
            <div>
              <p>How many letters in each word?</p>
              {createTable(wordCount).map(elem => (
                <div key={elem}>
                  <label>{elem}: </label>
                  <input type="number" name={elem} min="1" max="20" />
                </div>
              )).slice(0, maxWords)}
              <button type="submit">Submit</button>
            </div>
          ) : null}
        </form>
      </div> : phase === 2 ? <div></div> : phase === 3 ? <div></div> : null
    );
  }
}
