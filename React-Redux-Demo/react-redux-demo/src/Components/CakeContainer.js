import React from "react";
import { buyCake, returnCake } from "./Reducer/Cake/CakeAction";
//import  from "./Reducer/Cake/CakeAction";
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Cake Container {props.numberOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
      <button onClick={props.returnCake}>Return Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    returnCake: () => dispatch(returnCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
