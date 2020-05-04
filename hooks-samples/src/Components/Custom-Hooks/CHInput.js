import React, { useState } from "react";
import UseInput from "./UseInput";

function CHInput() {
  const [firstName, bindFirstName, ResetFirstName] = UseInput("");
  const [lastName, bindLastName, ResetLastName] = UseInput("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    ResetHandler();
  };

  const ResetHandler = () => {
    ResetFirstName();
    ResetLastName();
  };

  return (
    <form onSubmit={SubmitHandler}>
      <div>
        <label>First Name:</label>
        <input type="text" {...bindFirstName}></input>
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" {...bindLastName}></input>
      </div>
      <button type="submit">Submit</button>
      <button type="reset" onClick={ResetHandler}>
        Reset
      </button>
    </form>
  );
}

export default CHInput;
