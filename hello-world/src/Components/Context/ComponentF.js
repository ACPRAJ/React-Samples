import React, { Component } from 'react'
import { UsernameConsumer } from './userContext'

export class ComponentF extends Component {
    render() {
        return (
            <UsernameConsumer>
                {
                    (Username) => {
                        return <div>
                            Hello {Username}
                        </div>
                    }
                }
            </UsernameConsumer>

        )
    }
}

export default ComponentF
