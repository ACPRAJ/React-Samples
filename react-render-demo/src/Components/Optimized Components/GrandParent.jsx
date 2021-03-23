import React, { useState } from "react"
import { ChildOne } from "./ChildOne"
import { ParentOne } from "./ParentOne"

/******************************************************************************
 * When a state change is passed to the child, everytime the state is changed
 * the child component as well along with the parent components are rendered
 ******************************************************************************/

export const GrandParent = () => {
  const [newCount, setNewCount] = useState(0)

  console.log("GrandParent Render")
  return (
    <div>
      <button onClick={() => setNewCount((prev) => prev + 1)}>
        Grand Parent Count {newCount}
      </button>
      <ParentOne children={<ChildOne />} grandCount={newCount}></ParentOne>
    </div>
  )
}
