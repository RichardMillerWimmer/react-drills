import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image'

class App extends Component {
  constructor() {
    super();
    this.state = {

    }

  }


  render() {
    return (
      <div className="App" >
        <Image url='https://steamuserimages-a.akamaihd.net/ugc/791992712493073080/9BF5EE311E5ED5B66350C0554262147CF3327D06/' alt='gotcha' />
      </div>
    )
  }

}

export default App;
