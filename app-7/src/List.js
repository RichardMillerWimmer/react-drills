import React, { Component } from 'react';
import Todo from './Todo'

class List extends Component {
    constructor() {
        super();
        this.state = {

        }

    }


    render() {
        let list = this.props.list.map((elem, index) => {
            return <Todo key={index} task={elem} />
        })
        return (
            <div className="App" >
                {list}
            </div>
        )
    }

}

export default List;