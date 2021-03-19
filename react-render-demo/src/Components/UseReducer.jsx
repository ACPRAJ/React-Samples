import React, { useReducer } from "react"

/**************************************************************************************************************
 * After an initial render, if the values hasn't changed, the component is not render eventhough it's flagged *
 * After rerenders, if the value hasn't change, the component would be rendered once and not thereafter.      *
 **************************************************************************************************************/
const initialState = 0

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1
      break
    case "decrement":
      return state - 1
      break
    case "reset":
      return initialState
      break
    default:
      return state
  }
}

export const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState)

  console.log("UseReducer Render")
  return (
    <div>
      <div>Count {count} </div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  )
}
