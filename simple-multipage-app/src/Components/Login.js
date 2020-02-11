import React, { Component } from 'react'
import MainPage from './MainPage'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            isLoggedIn: false
        }
    }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onLoginButtonClicked = () => {
        const { username, password } = this.state;

        if (username == "acp" && password == "acp") {
            this.setState({
                isLoggedIn: true
            })
            console.log(this.state)
            return;
        }

        alert("Invalid User Credentials")
    }

    onResetButtonClicked = () => {
        this.setState({
            username: "",
            password: ""
        })
    }

    componentDidUpdate() {
        if (this.setState.isLoggedIn)
            console.log("Logged in")
    }

    componentDidMount() {
        this.setState({
            username: "acp",
            password: "acp"
        })
    }

    render() {
        if (this.state.isLoggedIn)
            return (
                <MainPage />
            )
        else
            return (
                <div>
                    <div>
                        <label>Username: </label>
                        <input type="text" name="username" onChange={this.onChangeHandler} value={this.state.username} />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" name="password" onChange={this.onChangeHandler} value={this.state.password} />
                    </div>
                    <div>
                        <button onClick={this.onLoginButtonClicked}>Login</button>
                        &nbsp; &nbsp;
                    <button onClick={this.onResetButtonClicked}>Reset</button>
                    </div>
                </div>
            )
    }
}

export default Login
