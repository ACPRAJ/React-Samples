import React, { useState, useCallback } from "react";
import Title from "./Title";
import UCCount from "./UCCount";
import UCButton from "./UCButton";

function UCParentComponent() {
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(5000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <UCCount text="Age" count={age} />
      <UCButton handleClick={incrementAge}>Increment Age</UCButton>
      <UCCount text="Salary" count={salary} />
      <UCButton handleClick={incrementSalary}>Increment Salary</UCButton>
    </div>
  );
}

export default UCParentComponent;
