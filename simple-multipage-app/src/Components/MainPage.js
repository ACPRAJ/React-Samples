import React, { Component } from 'react'
import Login from './Login'

class MainPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    onLogoutClicked = () => {
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        if (this.state.isLoggedIn)
            return (
                <div>
                    <div>This is Main Page</div>
                    <button onClick={this.onLogoutClicked}>Logout</button>
                </div>
            )
        else
            return (
                <Login />
            )
    }
}

export default MainPage
