import React from "react"

/*****************************************************************************
 * INVALID USE OF MEMO
 *
 * Don't use Memo, when the child component uses props.children
 * Because props.children always return a new ref,
 * causing the component to rerender.
 ******************************************************************************/

export const ChildThree = ({ children, name }) => {
  console.log("ChildThree Render")

  return (
    <div>
      <h3>ChildThree Component</h3>
      {children} {}
      {name}
    </div>
  )
}

export const MemoizedChildThree = React.memo(ChildThree)
