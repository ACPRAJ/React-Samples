import { BUY_CAKE, RETURN_CAKE } from "./CakeConstants";

const initialCakeState = {
  numberOfCakes: 10,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    case RETURN_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + 1,
      };

    default:
      return state;
  }
};

export default cakeReducer;
