import React, { Component } from 'react';
import './App.css';
import Todo from './Todo'

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      task: ''
    }

  }

  handleTask(value) {
    this.setState({ task: value })
  }

  addTask(task) {
    let newList = this.state.list
    newList.push(task)
    this.setState({ list: newList })
    // this.setState({ list: [...this.state.list, this.state.task] })
    // task = ''
  }


  render() {
    let list = this.state.list.map((elem, index) => {
      return <Todo key={index} task={elem} />
    })
    return (
      <div className="App" >
        <h1>My To Do List</h1>
        <input onChange={event => this.handleTask(event.target.value)} placeholder='enter new task'></input>
        <button onClick={() => this.addTask(this.state.task)}>Add</button>
        {list}
      </div>
    )
  }

}

export default App;
