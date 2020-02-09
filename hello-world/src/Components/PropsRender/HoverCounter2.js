import React, { Component } from 'react'

class HoverCounter2 extends Component {
    render() {
        const { count, fnIncrementCount } = this.props
        return (
            <h1 onMouseOver={fnIncrementCount}>Hovered {count} Times</h1>
        )
    }
}

export default HoverCounter2
