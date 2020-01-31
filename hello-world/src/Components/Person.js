import React from 'react'

function Person(props) { 
    //console.log(props)   
    return (
        <div>
            <h2>
                I am {props.propsPerson.name}, aged {props.propsPerson.age} and expert in {props.propsPerson.skill} 
            </h2>
        </div>
    )
}

export default Person
