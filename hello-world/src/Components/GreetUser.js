import React, { Component } from 'react'

class GreetUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {
        return (this.state.isLoggedIn && <div>Welcome ACP!</div>)

        //Approach 3
        // let Message

        // if (this.state.isLoggedIn == true)
        //     Message = "Welcome ACP!"
        // else
        //     Message = "Welcome Guest"
        // return (<div> { Message } </div>)

        //Approach 2
        // return ( this.state.isLoggedIn ? (
        //     <div>Welcome ACP!</div>
        // ) : (
        //     <div>Welcome Guest</div>
        // ))

        //Apporach 1
        // if (this.state.isLoggedIn)
        // return (
        //     <div>
        //         Welcome ACP!
        //     </div>
        // )

        // return (
        //     <div>Welcome Guest!</div>
        // )
    }
}

export default GreetUser
