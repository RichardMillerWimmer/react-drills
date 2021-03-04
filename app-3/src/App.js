import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      listOfItems: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"],
      userInput: ''
    }
  }

  handleChange(value) {
    this.setState({ userInput: value })
  }


  render() {
    let filterList = this.state.listOfItems.filter((elem) => {
      return elem.includes(this.state.userInput)
    })
    let displayList = filterList.map((elem, index) => {
      return <h2 key={index}>{elem}</h2>
    });
    return (
      <div className='App'>
        <input onChange={(event) => this.handleChange(event.target.value)}></input>
        <div>{displayList}</div>
      </div>
    )
  }
}

export default App;
