import React, { Component } from 'react'

const withCounter = (WrappedComponent, StepValue) => {
    class WithCounter extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        fnIncrementCount = () => {
            this.setState((prevState) => {
                return { count: prevState.count + StepValue }
            })
        }
        render() {
            return <WrappedComponent
                count={this.state.count}
                fnIncrementCount={this.fnIncrementCount}
                {...this.props} />
        }
    }

    return WithCounter
}

export default withCounter
