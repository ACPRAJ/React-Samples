import React, { Component } from 'react'
import WithCounter from './withCounter'

class ClickCounter extends Component {


    render() {
        const { count, fnIncrementCount, name } = this.props
        return (
            <div>
                <button onClick={fnIncrementCount}> {name} Clicked {count} Times</button>
            </div>
        )
    }
}

export default WithCounter(ClickCounter, 5)
