import React, { useState } from "react";

function UseStateWithArrays() {
  const [Items, setItems] = useState([]);

  const AddItemClicked = () => {
    setItems([
      ...Items,
      {
        id: Items.length,
        value: Math.floor(Math.random() * 10) + 1
      }
    ]);
  };
  return (
    <div>
      <button onClick={AddItemClicked}>Add Item</button>
      <ul>
        {Items.map(item => (
          <li key={Items.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseStateWithArrays;
