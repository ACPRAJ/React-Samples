import React, { useState } from "react";

function UseStateObject() {
  const [Name, setName] = useState({ FirstName: "", LastName: "" });

  const setFirstName = fName => {
    return setName({ ...Name, FirstName: fName });
  };

  return (
    <form>
      <input
        type="text"
        value={Name.FirstName}
        onChange={e => setFirstName(e.target.value)}
        //onChange={e => setName({ ...Name, FirstName: e.target.value })}
      />
      <input
        type="text"
        value={Name.LastName}
        onChange={e => setName({ ...Name, LastName: e.target.value })}
      />

      <h2>Your First Name is {Name.FirstName}</h2>
      <h2>Your First Name is {Name.LastName}</h2>
      <h2>{JSON.stringify(Name)}</h2>
    </form>
  );
}

export default UseStateObject;
