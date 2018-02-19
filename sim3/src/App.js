import React, { Component } from 'react';
import './App.css';
import router from './router';
import AuthView from './Components/AuthView/AuthView';
import DashView from './Components/DashView/DashView';
import ProfileView from './Components/ProfileView/ProfileView';
import SearchView from './Components/SearchView/SearchView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>i believe in u</h1>
        {router}
      </div>
    );
  }
}

export default App;
