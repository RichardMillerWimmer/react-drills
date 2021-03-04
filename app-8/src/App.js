import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      character: [],
      homeworld: []
    }
  }

  componentDidMount() {
    axios.get('https://swapi.dev/api/people/4/').then(response => {
      this.setState({ charater: response.data })
    })
  }
  componentDidMount() {
    axios.get('http://swapi.dev/api/planets/1/').then(response => {
      this.setState({ homeowold: response.data })
    })

  }


  render() {
    return (
      <div className="App" >
        <h1>Name: {this.state.character.name}</h1>
        <h1>Height: {this.state.character.height}</h1>
        <h1>Birth Year: {this.state.character.birth_year}</h1>
        <h1>Eye Color: {this.state.character.eye_color}</h1>
        <h1>Skin Color {this.state.character.skin_color}</h1>
        <h1>Homeworld: {this.state.homeworld.name}</h1>
      </div>
    );
  }
}


export default App;
