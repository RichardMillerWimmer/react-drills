import React, { Component } from 'react';


class Image extends Component {
    constructor() {
        super();
        this.state = {

        }

    }


    render() {
        return (
            <div className="App" >
                <img src={this.props.url} alt={this.props.alt} />
            </div>
        )
    }

}

export default Image;