import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      listOfItems: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    }
  }



  render() {
    let displayList = this.state.listOfItems.map((elem, index) => {
      return <h2 key={index}>{elem}</h2>
    });
    return <div className='App'>{displayList}</div>;
  }
}

export default App;
