import React, { useEffect, useState, useRef } from "react";

function RefTimer() {
  const [time, setTime] = useState(0);
  const RefInterval = useRef();

  useEffect(() => {
    RefInterval.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
    return () => {
      resetTimer();
    };
  }, []);

  const resetTimer = () => {
    clearInterval(RefInterval.current);
    setTime(0);
  };

  return (
    <div>
      <h2>Time - {time}</h2>
      <div>
        <button onClick={resetTimer}>Clear Timer</button>
      </div>
    </div>
  );
}

export default RefTimer;
