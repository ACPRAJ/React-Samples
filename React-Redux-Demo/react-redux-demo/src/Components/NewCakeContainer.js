import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, returnCake } from "./Reducer/Cake/CakeAction";

function NewCakeContainer() {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  const [cakesInput, setCakesInput] = useState(1);

  return (
    <div>
      <h2>Number Of Cakes {numberOfCakes}</h2>
      <input
        type="text"
        value={cakesInput}
        onChange={(e) => setCakesInput(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(cakesInput))}>Buy Cakes</button>
      <button onClick={() => dispatch(returnCake(cakesInput))}>
        {" "}
        return Cakes
      </button>
    </div>
  );
}

export default NewCakeContainer;
