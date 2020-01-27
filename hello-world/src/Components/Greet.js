import React from 'react'

const Greet = () => {
    return <h1>Greetings!</h1>
}

export const Vanakkam = (props) => {
    const {name, spouse} = props;
    return (<div>
        <h1>Name: { name }</h1>
        <h1>Spouse: { spouse }</h1>
        { props.children}
        </div>
    )
}

export default Greet