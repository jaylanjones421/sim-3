import React, { Component } from 'react';
import './App.css';
import router from './router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>something is here</h1>
        {router}
      </div>
    );
  }
}

export default App;
