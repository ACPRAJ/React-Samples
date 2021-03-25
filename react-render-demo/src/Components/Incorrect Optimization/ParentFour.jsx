import React, { useState, useMemo, useCallback } from "react"
import { MemoizedChildFive } from "./ChildFive"

/*****************************************************************************
 * INVALID USE OF MEMO
 *
 * When a function or a reference (like an object) is passed to the child
 * as props then React.Memo will not work out.
 *
 * To optimise reference use useMemo hook and to optimise functions
 * use useCallback hook
 ******************************************************************************/

export const ParentFour = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("ACP")

  const person = {
    fName: "James",
    lName: "Bond",
  }

  const memoizedPerson = useMemo(() => person, [])

  const onChildButtonClick = () => {
    alert("Child Five Button Clicked")
  }

  const memoizedButtonClick = useCallback(onChildButtonClick, [])

  console.log("ParentFour Render")
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setName("RAJ")}>Change Name - {name}</button>
      <MemoizedChildFive
        name={name}
        person={memoizedPerson}
        buttonClick={memoizedButtonClick}
        //person={person}
        //buttonClick={onChildButtonClick}
      />
    </div>
  )
}
