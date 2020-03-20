import React, { useEffect, useRef } from "react";

function InputFocus() {
  const InputRef = useRef(null);

  useEffect(() => {
    InputRef.current.focus();
  }, []);

  return (
    <div>
      <label>Username</label>
      <input ref={InputRef} type="text"></input>
    </div>
  );
}

export default InputFocus;
