import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  componentDidMount() {
    window.fetch('/api/users')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
