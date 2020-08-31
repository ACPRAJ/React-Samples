/*************************************************************************
 * This file is a copy of Index.js. Written it to check my understanding.
 *************************************************************************/
const redux = require("redux");
const createStore = redux.createStore;
const BUY_CAKE = "BUY_CAKE";

const initialState = {
  numberOfCakes: 10,
};

const action = () => {
  return {
    type: BUY_CAKE,
    info: "Copy of Index.js",
  };
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    default:
      return state;
  }
}

const store = createStore(reducer);
console.log("Initial State: ", store.getState());
const unsubscribe = (subscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
));
store.dispatch(action());
store.dispatch(action());
store.dispatch(action());
unsubscribe();
