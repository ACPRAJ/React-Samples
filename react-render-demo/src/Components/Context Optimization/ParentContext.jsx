import React, { createContext, useState } from "react"
import { MemoizedChildA } from "./ChildrenContext"

export const CountContext = createContext()
const CountProvider = CountContext.Provider

/********************************************************************************************
 * With the normal context creation all the nested children are re-rendered
 * whenever the paren'ts state chagnes.
 * To re-render only the child which consumes context, follow one of the below approaches
 *
 * 1. Memoize the child
 * 2. Pass the child as a props to the parent, in this approach
 * no need to momoize the child
 *********************************************************************************************/

export const ParentContext = ({ children }) => {
  const [count, setCount] = useState(0)

  console.log("Parent Render")
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Parent Count {count}
      </button>
      <CountProvider value={count}>
        {children}
        {/* <MemoizedChildA /> */}
      </CountProvider>
    </div>
  )
}
