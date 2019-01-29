import React, { Component } from 'react';
import PhaseOne from './phase1Details';
import PhaseTwo from './phase2FillBlanks';
import PhaseThree from './phase3Results';
import { combiner } from './util';

export default class Root extends Component {
  constructor() {
    super();
    this.state = {
      phase: 'details',
      wordCount: 0,
      calledLetters: ''
    };
    this.handleChangeWords = this.handleChangeWords.bind(this);
    this.handleFirstSubmit = this.handleFirstSubmit.bind(this);
    this.handleSecondSubmit = this.handleSecondSubmit.bind(this);
  }

  async handleChangeWords(event) {
    const wordCount = Number(event.target.value);
    await this.setState({ wordCount });
  }

  async handleFirstSubmit(event) {
    event.preventDefault();
    const wordCount = Number(event.target.wordCount.value);
    const phase = 'fillInBlanks';
    const first = event.target.First
      ? { length: Number(event.target.First.value), value: [] }
      : null;
    const second = event.target.Second
      ? { length: Number(event.target.Second.value), value: [] }
      : null;
    const third = event.target.Third
      ? { length: Number(event.target.Third.value), value: [] }
      : null;
    const fourth = event.target.Fourth
      ? { length: Number(event.target.Fourth.value), value: [] }
      : null;
    wordCount !== '' &&
      (await this.setState({ phase, wordCount, first, second, third, fourth }));
  }

  async handleSecondSubmit(event) {
    event.preventDefault();
    const phase = 'results';
    console.log('EVENT TARGET ON SUB: ', event.target);

    const first = event.target.first
      ? { ...this.state.first, value: combiner(event.target.first) }
      : null;
    const second = event.target.second
      ? { ...this.state.second, value: combiner(event.target.second) }
      : null;
    const third = event.target.third
      ? { ...this.state.third, value: combiner(event.target.third) }
      : null;
    const fourth = event.target.fourth
      ? { ...this.state.fourth, value: combiner(event.target.fourth) }
      : null;
    const calledLetters = event.target.calledLetters.value;
    // await promises, then set state so phase changes
    await this.setState({ phase, calledLetters, first, second, third, fourth });
    // make sure it happens only after words promises
  }

  render() {
    const {
      phase,
      wordCount,
      calledLetters,
      first,
      second,
      third,
      fourth
    } = this.state;
    const words = { first, second, third, fourth };

    return phase === 'details' ? (
      <PhaseOne
        handleChangeWords={this.handleChangeWords}
        handleFirstSubmit={this.handleFirstSubmit}
        wordCount={wordCount}
      />
    ) : phase === 'fillInBlanks' ? (
      <PhaseTwo
        handleSecondSubmit={this.handleSecondSubmit}
        state={this.state}
      />
    ) : phase === 'results' ? (
      <PhaseThree calledLetters={calledLetters} words={words} />
    ) : null;
  }
}
