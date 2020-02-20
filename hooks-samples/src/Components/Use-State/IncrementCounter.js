import React, { useState } from "react";

function IncrementCounter() {
  const initialValue = 0;
  const [Count, setCount] = useState(initialValue);

  const IncrementCounter = maxIncrement => {
    for (let i = 0; i < maxIncrement; i++) {
      setCount(prevCount => prevCount + 1);
    }
  };

  return (
    <div>
      <label>Count: {Count}</label>
      <button onClick={() => setCount(0)}>Reset Counter</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment Count
      </button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>
        Decrement Count
      </button>
      <button onClick={() => IncrementCounter(5)}>Increment By 5</button>
    </div>
  );
}

export default IncrementCounter;
