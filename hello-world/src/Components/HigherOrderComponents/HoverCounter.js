import React, { Component } from 'react'
import WithCounter from './withCounter'

class HoverCounter extends Component {


    render() {
        const { count, fnIncrementCount } = this.props
        return (
            <div>
                <h1 onMouseOver={fnIncrementCount}>Hovered {count} times</h1>
            </div>
        )
    }
}

export default WithCounter(HoverCounter, 10)
