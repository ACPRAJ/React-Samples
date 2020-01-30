import React from 'react'

function FunctionClick(params) {
    function onButtonClick() {
        return(
            console.log('Function Button Clicked')
        )
    }
    return (
        <div>
            <button onClick={ onButtonClick }>Function Button</button>
        </div>
    )
}

export default FunctionClick