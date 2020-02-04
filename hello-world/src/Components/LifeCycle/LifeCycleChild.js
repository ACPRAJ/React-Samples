import React, { Component } from 'react'

class LifeCycleChild extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"ACPRAJ"
        }
        console.log(`Life Cycle Child - constructor`)
    }

    static getDerivedStateFromProps(props, state) {
        console.log(`Life Cycle Child - getDerivedStateFromProps`)
        return null;
    }

    componentDidMount() {
        console.log(`Life Cycle Child - componentDidMount`)
    }

    shouldComponentUpdate() {
        console.log(`Life Cycle Child - shouldComponentUpdate`)
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log(`Life Cycle Child - getSnapShotBeforeUpdate`)
        return null;
    }

    componentDidUpdate() {
        console.log(`Life Cycle Child - componentDidUpdate`)
    }
    
    render() {
        console.log(`Life Cycle Child - render`)
        return (            
            <div>
                <h3>Life Cycle Child</h3>
            </div>
        )
    }
}

export default LifeCycleChild
