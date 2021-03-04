import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }

    }

    usernameChange(value) {
        this.setState({ username: value })
    }
    passwordChange(value) {
        this.setState({ password: value })
    }

    login(username, password) {
        return alert(`Username: ${username} Password: ${password}`)
    }

    render() {
        return (
            <div>
                <input onChange={event => this.usernameChange(event.target.value)} placeholder='username'></input>
                <input onChange={event => this.passwordChange(event.target.value)} placeholder='password'></input>
                <button onClick={() => this.login(this.state.username, this.state.password)}>Login</button>
            </div>
        )
    }

}

export default Login