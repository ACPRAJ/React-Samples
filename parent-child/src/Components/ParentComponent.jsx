import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [txtString, setTxtString] = useState("");
  const [parentText, setParentText] = useState("");

  const onButtonupdated = () => {
    setParentText(txtString);
  };

  const onChildUpdated = (text) => {
    alert(`Upadted child value: ${text}`);
  };

  return (
    <div>
      <div>
        <h2>Parent Component</h2>
        <label>Parent Text</label>
        <input
          type="text"
          value={txtString}
          onChange={(e) => setTxtString(e.target.value)}
        ></input>
        <button onClick={onButtonupdated}>Update Parent Component</button>
      </div>
      <ChildComponent
        onChildComponentUpdate={onChildUpdated}
        parentText={parentText}
      />
    </div>
  );
}

export default ParentComponent;
