import { BUY_CAKE, RETURN_CAKE } from "./CakeConstants";

const initialCakeState = {
  numberOfCakes: 10,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.payload,
      };

    case RETURN_CAKE:
      return {
        ...state,
        numberOfCakes:
          Number.parseInt(state.numberOfCakes, 10) +
          Number.parseInt(action.payload, 10),
      };

    default:
      return state;
  }
};

export default cakeReducer;
