import React, { Component } from 'react'

export class WithCounter2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    fnIncrementCount = () => {
        this.setState((prevState) => {
            return { count: prevState.count + parseInt(this.props.incrementStep) }
        })
    }

    render() {
        return (
            <div>
                {this.props.children(this.state.count, this.fnIncrementCount, this.state.incrementStep)}
            </div>
        )
    }
}

export default WithCounter2
