import React, { useState } from "react"
import { MemoizedChildThree } from "./ChildThree"
import { MemoizedChildFour } from "./ChildFour"

/*****************************************************************************
 * INVALID USE OF MEMO
 *
 * Don't use Memo, when the child component uses props.children
 * Because props.children always return a new ref,
 * causing the component to rerender.
 *
 * When the child has impure function, don't use Memo.
 * Impure examples - functions using time or random variable.
 ******************************************************************************/

export const ParentThree = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("ACP")

  console.log("ParentThree Render")
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setName("RAJ")}>Change Name - {name}</button>
      <MemoizedChildFour />
      {/* <MemoizedChildThree name={name}>
        <strong>Hello</strong>
      </MemoizedChildThree> */}
    </div>
  )
}
