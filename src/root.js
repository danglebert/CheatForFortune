import React, { Component } from 'react';
import PhaseOne from './phase1Details';
import PhaseTwo from './phase2FillBlanks';
import PhaseThree from './phase3Results';
import { combiner } from './util'

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
    const first = event.target.First ? { length: Number(event.target.First.value), value: [] } : null;
    const second = event.target.Second ? { length: Number(event.target.Second.value), value: [] } : null;
    const third = event.target.Third ? { length: Number(event.target.Third.value), value: [] } : null;
    const fourth = event.target.Fourth ? { length: Number(event.target.Fourth.value), value: [] } : null;
    const fifth = event.target.Fifth ? { length: Number(event.target.Fifth.value), value: [] } : null;
    const sixth = event.target.Sixth ? { length: Number(event.target.Sixth.value), value: [] } : null;
    const seventh = event.target.Seventh ? { length: Number(event.target.Seventh.value), value: [] } : null;
    const eighth = event.target.Eighth ? { length: Number(event.target.Eighth.value), value: [] } : null;
    const ninth = event.target.Ninth ? { length: Number(event.target.Ninth.value), value: [] } : null;
    const tenth = event.target.Tenth ? { length: Number(event.target.Tenth.value), value: [] } : null;
    wordCount !== '' && (await this.setState({ phase, wordCount, first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth }));
    // console.log(this.state)
  }

  async handleSecondSubmit(event){
    event.preventDefault();
    const phase = 'results'

    const first = event.target.first ? { ...this.state.first, value: combiner(event.target.first)} : null
    const second = event.target.second ? { ...this.state.second, value: combiner(event.target.second)} : null
    const third = event.target.Third ? { ...this.state.Third, value: combiner(event.target.Third)} : null
    const fourth = event.target.Fourth ? { ...this.state.Fourth, value: combiner(event.target.Fourth)} : null
    const fifth = event.target.Fifth ? { ...this.state.Fifth, value: combiner(event.target.Fifth)} : null
    const sixth = event.target.Sixth ? { ...this.state.Sixth, value: combiner(event.target.Sixth)} : null
    const seventh = event.target.Seventh ? { ...this.state.Seventh, value: combiner(event.target.Seventh)} : null
    const eighth = event.target.Eighth ? { ...this.state.Eighth, value: combiner(event.target.Eighth)} : null
    const ninth = event.target.Ninth ? { ...this.state.Ninth, value: combiner(event.target.Ninth)} : null
    const tenth = event.target.Tenth ? { ...this.state.Tenth, value: combiner(event.target.Tenth)} : null
    const calledLetters = event.target.calledLetters.value;
    await this.setState({phase, calledLetters, first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth})
    // console.log(this.state)
  }

  render() {
    const { phase, wordCount, calledLetters, first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth } = this.state;
    const words = { first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth }

    return (
      phase === 'details' ?
      <PhaseOne handleChangeWords={this.handleChangeWords} handleFirstSubmit={this.handleFirstSubmit} wordCount={wordCount} />

      : phase === 'fillInBlanks' ?
      <PhaseTwo handleSecondSubmit={this.handleSecondSubmit} state={this.state}/>

      : phase === 'results' ?
      <PhaseThree calledLetters={calledLetters} words={words}/> : null
    );
  }
}
