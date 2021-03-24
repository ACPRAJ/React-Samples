import React from "react"

export const ChildFive = ({ name, person, buttonClick }) => {
  console.log("ChildFive Render")

  return (
    <div>
      Hello {name}!
      <div>
        First Name: <strong>{person.fName} </strong>
        Last Name: <strong>{person.lName}</strong>
      </div>
      <div>
        <button onClick={buttonClick}>Child Five</button>
      </div>
    </div>
  )
}

export const MemoizedChildFive = React.memo(ChildFive)
