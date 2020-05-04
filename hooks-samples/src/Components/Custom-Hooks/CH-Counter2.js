import React from "react";
import UseCounter from "./UseCounter";

function CHCounter2() {
  const [count, Increment, Decrement, Reset] = UseCounter(100, 10);
  return (
    <div>
      <div>
        <h2>Count = {count}</h2>
      </div>
      <div>
        <button onClick={Increment}> Increment </button>
        <button onClick={Decrement}> Decrement </button>
        <button onClick={Reset}> Reset </button>
      </div>
    </div>
  );
}

export default CHCounter2;
