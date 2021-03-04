import React, { Component } from 'react';


class NewTask extends Component {
    constructor() {
        super();
        this.state = {
            task: ''
        }

    }

    handleTask(value) {
        this.setState({ task: value })
    }

    handleAdd(task) {
        this.props.addTask(task)
        this.setState({ task: '' })
        // console.log(this.props.list)
    }


    render() {
        return (
            <div className="App" >
                <input value={this.state.task} onChange={event => this.handleTask(event.target.value)} placeholder='enter new task'></input>
                <button onClick={() => this.handleAdd(this.state.task)}>Add</button>
            </div >
        )
    }

}

export default NewTask;