import React, { Component } from 'react'

class ClickCounter2 extends Component {

    render() {
        const { count, fnIncrementCount } = this.props
        return (
            <div>
                <button onClick={fnIncrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default ClickCounter2
