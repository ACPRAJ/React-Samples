import React, { useState } from "react";

function UseInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const Reset = () => {
    setValue(initialValue);
  };

  const bind = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  return [value, bind, Reset];
}

export default UseInput;
