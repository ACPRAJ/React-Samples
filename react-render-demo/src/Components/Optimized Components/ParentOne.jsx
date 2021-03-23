import React, { useState } from "react"

/**************************************************************************************************************
 * To stop the child from rendering when there is no change in its state, send the child as props
 **************************************************************************************************************/
export const ParentOne = ({ children, grandCount }) => {
  const [count, setCount] = useState(0)

  console.log("ParentOne Render")
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count - {count}
      </button>
      {children}
      {grandCount}
    </div>
  )
}
