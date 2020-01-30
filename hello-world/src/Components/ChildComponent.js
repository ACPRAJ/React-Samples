import React from 'react'

function ChildComponent(props) {
    
    return(
        <div>
            <button onClick={ () => props.greetHandler({Name1:"Child1", Name2:"Child2"}) }> Alert Button </button>
        </div>
    );
}

export default ChildComponent