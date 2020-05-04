import { useState } from "react";

function UseCounter(initialValue = 0, incrementBy) {
  const [count, setCount] = useState(initialValue);

  const Increment = () => {
    setCount((prevCount) => prevCount + incrementBy);
  };

  const Decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const Reset = () => {
    setCount(initialValue);
  };

  return [count, Increment, Decrement, Reset];
}

export default UseCounter;
