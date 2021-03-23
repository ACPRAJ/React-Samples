import React from "react"

export const ChildTwo = () => {
  console.log("ChildTwo Render")

  return (
    <div>
      <h3>ChildTwo Component</h3>
    </div>
  )
}

export const MemoizedChildTwo = React.memo(ChildTwo)
