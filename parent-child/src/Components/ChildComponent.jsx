import React, { useState, useEffect } from "react";

function ChildComponent(props) {
  const { onChildComponentUpdate, parentText } = props;
  const [text, setText] = useState("");

  const onButtonClick = () => {
    onChildComponentUpdate(text);
  };

  useEffect(() => {
    setText(parentText);
  }, [parentText])

  return (
    <div>
      <h2>Child Component</h2>
      <h5>Parent Text: {parentText}</h5>
      <label>Child Text</label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button onClick={onButtonClick}>Update Child Component</button>
    </div>
  );
}

export default ChildComponent;
