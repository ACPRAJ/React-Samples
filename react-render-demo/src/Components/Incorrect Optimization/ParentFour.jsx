import React, { useState } from "react"
import { MemoizedChildFive } from "./ChildFive"

/*****************************************************************************
 * INVALID USE OF MEMO
 *
 * When a function or a reference (like an object) is passed to the child
 * as props then Memo will not work out.
 ******************************************************************************/

export const ParentFour = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("ACP")

  const person = {
    fName: "James",
    lName: "Bond",
  }

  const onChildButtonClick = () => {
    alert("Child Five Button Clicked")
  }

  console.log("ParentFour Render")
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setName("RAJ")}>Change Name - {name}</button>
      <MemoizedChildFive
        name={name}
        person={person}
        buttonClick={onChildButtonClick}
      />
    </div>
  )
}
