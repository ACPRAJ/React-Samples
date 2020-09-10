import React from "react";
import CountUp, { useCountUp } from "react-countup";

function CountUpComponent() {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    start: 500,
    end: 2000,
    delay: 1,
    decimals: 2,
    prefix: "$",
    startOnMount: false,
  });
  return (
    <div>
      <br />
      <h3>{countUp}</h3>
      <button onClick={start}>Start</button>
      <button onClick={pauseResume}>Pause / Resume</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => update(5000)}>Update</button>
      <br />
      <h3>
        <CountUp end={200} />
      </h3>

      <br />
      <h3>
        <CountUp end={200} duration={5} />
      </h3>

      <br />
      <h3>
        <CountUp start={500} end={800} duration={5} />
      </h3>

      <br />
      <h3>
        <CountUp start={500} end={1000} delay={2} prefix="$" decimals={2} />
      </h3>

      <br />
      <h3>
        <CountUp start={500} end={800} duration={5} suffix="USD" />
      </h3>
    </div>
  );
}

export default CountUpComponent;
