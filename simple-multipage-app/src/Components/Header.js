import React, { Component } from 'react'
import "../App.css"

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <h1 className="Header-Heading">Home Page</h1>
                <ul>
                    <li><button className="Logout-Header">Logout</button></li>
                </ul>

            </div>
        )
    }
}

export default Header
