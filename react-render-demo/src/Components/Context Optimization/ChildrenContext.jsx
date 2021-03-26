import React, { useContext } from "react"
import { CountContext } from "./ParentContext"

export const ChildA = () => {
  console.log("ChildA Render")

  return (
    <div>
      Child A
      <ChildB />
    </div>
  )
}
export const MemoizedChildA = React.memo(ChildA)

export const ChildB = () => {
  console.log("ChildB Render")

  return (
    <div>
      Child B
      <ChildC />
    </div>
  )
}

export const ChildC = () => {
  const count = useContext(CountContext)

  console.log("ChildC Render")
  return <div>ChildC Count {count}</div>
}
