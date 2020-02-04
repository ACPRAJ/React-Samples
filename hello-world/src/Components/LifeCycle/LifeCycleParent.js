import React, { Component } from 'react'
import LifeCycleChild from './LifeCycleChild'

class LifeCycleParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"ACPRAJ"
        }
        console.log(`Life Cycle Parent - constructor`)
    }

    static getDerivedStateFromProps(props, state) {
        console.log(`Life Cycle Parent - getDerivedStateFromProps`)
        return null;
    }

    componentDidMount() {
        console.log(`Life Cycle Parent - componentDidMount`)
    }

    shouldComponentUpdate() {
        console.log(`Life Cycle Parent - shouldComponentUpdate`)
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log(`Life Cycle Parent - getSnapShotBeforeUpdate`)
        return null;
    }

    componentDidUpdate() {
        console.log(`Life Cycle Parent - componentDidUpdate`)
    }

    changeState = () => {
        this.setState({
            name:"StateChanged"
        })
    }

    
    render() {   
        console.log(`Life Cycle Parent - render`)     
        return (   
            <div>                
                <h3>Life Cycle Parent</h3>
                <LifeCycleChild/>
                <button onClick={this.changeState}>Change State</button>
            </div>
        )
    }
}

export default LifeCycleParent
