import React, { useState } from "react"

/**************************************************************************
 * The render happens only when the reference of the object changes
 * and not when the content of the object changes
 **************************************************************************/

const InitState = {
  fName: "James",
  lName: "Bond",
}

export const ObjectUseState = () => {
  const [person, setPerson] = useState(InitState)

  const ChangeName = () => {
    // person.fName = "Ian"
    // person.lName = "Fleming"
    // setPerson(person)

    const newPerson = { ...person }
    newPerson.fName = "Ian"
    newPerson.lName = "Fleming"
    setPerson(newPerson)
  }

  console.log("ObjectUseState Render")
  return (
    <div>
      <button onClick={ChangeName}>
        {person.fName} {person.lName}
      </button>
    </div>
  )
}
