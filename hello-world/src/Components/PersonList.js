import React from 'react'
import Person from './Person'

function PersonList() {
    const person = [
        {
            id: 1,
            name: "ACPRAJ",
            age: 39,
            skill: "React"
        },
        {
            id: 2,
            name: "Balaji",
            age: 39,
            skill: "Customer Support"
        },
        {
            id: 3, 
            name: "Rajesh",
            age: 40,
            skill: "Angular"
        }
    ]
    return (
        <div>
            { person.map(x => <Person key={ x.id } propsPerson = { x }/>) }
            
        </div>
    )
}

export default PersonList
const person = [
        {
            id: 1,
            name: "ACPRAJ",
            age: 39,
            skill: "React"
        },
        {
            id: 2,
            name: "Balaji",
            age: 39,
            skill: "Customer Support"
        },
        {
            id: 3,
            name: "Rajesh",
            age: 40,
            skill: "Angular"
        }
    ]
