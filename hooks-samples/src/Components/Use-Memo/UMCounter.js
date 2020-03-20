import React, { useState, useMemo } from "react";

function UMCounter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const IncrementCount1 = () => {
    setCount1(count1 + 1);
  };

  const IncrementCount2 = () => {
    setCount2(count2 + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    if (count1 % 2 === 0) return true;
  }, [count1]);

  const isOdd = num => {
    if (num % 2 === 0) return false;
    return true;
  };

  return (
    <div>
      <div>
        <button onClick={IncrementCount1}>Counter 1 - {count1}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={IncrementCount2}>Counter 2 - {count2}</button>
        <span>{isOdd(count2) ? "Odd" : "Even"}</span>
      </div>
    </div>
  );
}

export default UMCounter;
