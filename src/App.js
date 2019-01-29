import React, { Component } from 'react';
import './App.css';
import Root from './root';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Wheel_of_Fortune_Round_1_template_Season_31.png/220px-Wheel_of_Fortune_Round_1_template_Season_31.png"
            className="App-logo"
            alt="logo"
          />
          <h1 className="App-title">CHEAT FOR FORTUNE</h1>
        </header>
        <div>
          <Root />
        </div>
      </div>
    );
  }
}

export default App;
