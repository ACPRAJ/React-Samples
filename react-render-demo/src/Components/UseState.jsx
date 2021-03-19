import React, { useState } from "react";

/**************************************************************************************************************
 * After an initial render, if the values hasn't changed, the component is not render eventhough it's flagged *
 * After rerenders, if the value hasn't change, the component would be rendered once and not thereafter.      *
 **************************************************************************************************************/
export const UseState = () => {
  const [count, setCount] = useState(0);

  console.log("UseState Render");
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setCount(0)}>Count to 0</button>
      <button onClick={() => setCount(5)}>Count to 5</button>
    </div>
  );
};
