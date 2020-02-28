import React, { useContext } from "react";
import { CountContext } from "../../App";

function ComponentD1() {
  const countContext = useContext(CountContext);

  return (
    <div>
      <button onClick={() => countContext.dispatchFn("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.dispatchFn("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.dispatchFn("reset")}>Reset</button>
    </div>
  );
}

export default ComponentD1;
