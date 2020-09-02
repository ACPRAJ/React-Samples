import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, returnCake } from "./Reducer/Cake/CakeAction";

function HooksCakeContainer() {
  const numberOfCakes = useSelector((state) => state.numberOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Hooks Cake Container {numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
      <button onClick={() => dispatch(returnCake())}>Return Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
