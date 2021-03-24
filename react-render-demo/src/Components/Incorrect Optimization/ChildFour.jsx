import React from "react"

/*************************************************************
 * When the child has impure function, don't use Memo.
 * Impure examples - functions using time or random variable.
 ***************************************************************/

export const ChildFour = ({ name }) => {
  var date = new Date()

  console.log("ChildFour Render")
  return (
    <div>
      Hello {name}. Time now is {date.getHours()}: {date.getMinutes()}:{" "}
      {date.getSeconds()}
    </div>
  )
}

export const MemoizedChildFour = React.memo(ChildFour)
