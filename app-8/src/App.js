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
    axios.get('https://swapi.dev/api/people/4/')
      .then(response => {
        console.log(response)
        this.setState({ character: response.data })
      })
      .catch(error => console.log(error))
  }



  render() {

    console.log(this.state.character)
    return (
      <div className="App" >
        <h1>Name: {this.state.character.name}</h1>
        <h1>Height: {this.state.character.height}</h1>
        <h1>Birth Year: {this.state.character.birth_year}</h1>
        <h1>Eye Color: {this.state.character.eye_color}</h1>
        <h1>Skin Color: {this.state.character.skin_color}</h1>
        {/* <h1>Homeworld: {this.state.character.homeworld}</h1> */}
      </div>
    );
  }
}


export default App;
