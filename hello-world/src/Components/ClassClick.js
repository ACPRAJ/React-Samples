import React,  {Component} from 'react'

class ClassClick extends Component {
    OnButtonClicked() {
        console.log('Class Button Clicked')
    }
    render() {
        return (
        <div>
            <button onClick = { this.OnButtonClicked }>Class Button Click</button>
        </div>
        )
    }
}

export default ClassClick

