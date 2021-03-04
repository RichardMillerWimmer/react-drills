import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import './Login';
import Login from './Login';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }

  }


  render() {
    return (
      <div className="App" >
        <Login />
      </div>
    )
  }

}

export default App;
