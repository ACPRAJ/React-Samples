import React, { useState } from "react"
import { Child } from "./Child"

/**************************************************************************************************************
 * For the Initial render, REACT renders both parent and all children recursively
 * For any re-renders where the state has changed, REACT renders both the parent and child
 * For any re-render where the old state is same as the new state, REACT only renders parent and not the child
 **************************************************************************************************************/
export const Parent = () => {
  const [count, setCount] = useState(0)

  console.log("Parent Render")
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setCount(0)}>Count to 0</button>
      <button onClick={() => setCount(5)}>Count to 5</button>
      <Child />
    </div>
  )
}
