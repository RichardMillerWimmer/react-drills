import React, { Component } from 'react';


class Todo extends Component {
    constructor() {
        super();
        this.state = {

        }

    }


    render() {
        return (
            <div className="App" >
                <h4>{this.props.task}</h4>
            </div>
        )
    }

}

export default Todo;