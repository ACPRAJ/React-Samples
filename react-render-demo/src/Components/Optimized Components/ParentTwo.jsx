import React, { useState } from "react"
import { MemoizedChildTwo } from "./ChildTwo"

export const ParentTwo = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("ACP")

  console.log("ParentTwo Render")
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setName("RAJ")}>Change Name - {name}</button>
      <MemoizedChildTwo name={name} />
    </div>
  )
}
