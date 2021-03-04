import React, { Component } from 'react';
import './App.css';
import List from './List'
import NewTask from './NewTask'

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    }

    this.addTask = this.addTask.bind(this)

  }


  addTask(task) {
    let newList = this.state.list
    newList.push(task)
    this.setState({ list: newList })
    // this.setState({ list: [...this.state.list, this.state.task] })
    // task = ''
  }


  render() {
    return (
      <div className="App" >
        <h1>My To Do List</h1>
        <NewTask addTask={this.addTask} list={this.state.list} />
        <List list={this.state.list} />
      </div>
    )
  }

}

export default App;