import React, { Component } from 'react'

class Welcome extends Component {
    render () {
        const {name, spouse} = this.props
    return (
        <div>
            <h1>Welcome { name } - { spouse }</h1>
            <i> {this.props.children} - by the class component </i>
        </div>
    )
    }
}

export default Welcome