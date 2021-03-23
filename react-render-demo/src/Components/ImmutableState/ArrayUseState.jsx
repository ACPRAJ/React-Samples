import React, { useState } from "react"

/**************************************************************************
 * The render happens only when the reference of the object changes
 * and not when the content of the object changes
 **************************************************************************/

const InitState = ["James", "Bond"]

export const ArrayUseState = () => {
  const [persons, setPersons] = useState(InitState)

  const PopulateNames = () => {
    // persons.push("Ian")
    // persons.push("Fleming")
    // setPersons(persons)

    var newPersons = [...persons]
    newPersons.push("Ian")
    newPersons.push("Fleming")
    setPersons(newPersons)
  }

  console.log("ArrayUseState Render")

  return (
    <div>
      <button onClick={PopulateNames}>Populate Names</button>
      {persons.map((item, index) => (
        <div key={index}> {item}</div>
      ))}
    </div>
  )
}
