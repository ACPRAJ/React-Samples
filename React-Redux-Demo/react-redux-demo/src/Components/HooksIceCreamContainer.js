import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  buyIceCream,
  returnIceCream,
} from "./Reducer/IceCream/IceCreamActions";
//import  from "./Reducer/IceCream/IceCreamActions";

function HooksIceCreamContainer() {
  const numberOfIceCreams = useSelector(
    (state) => state.iceCream.numberOfIceCreams
  );
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Hook Ice Cream Container {numberOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
      <button onClick={() => dispatch(returnIceCream())}>
        Return Ice Cream
      </button>
    </div>
  );
}

export default HooksIceCreamContainer;
