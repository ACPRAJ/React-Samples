const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAMS = "BUY_ICE_CREAMS";

const buyCakes = () => {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
};

function buyIceCreams() {
  return {
    type: BUY_ICECREAMS,
  };
}

const initialState = {
  numberOfCakes: 10,
  numberOfIceCreams: 20,
};
buyIceCreams;
function reducer(state = initialState, action) {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    case BUY_ICECREAMS:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };

    default:
      return state;
  }
}

const store = createStore(reducer);
console.log("Initial State", store.getState());
//const unsubscribe = store.subscribe(() => console.log("Updated State: ", store.getState()))
store.subscribe(() => console.log("Subscribed: ", store.getState()));
store.dispatch(buyCakes());
store.dispatch(buyCakes());
store.dispatch(buyCakes());
store.dispatch(buyIceCreams());
store.dispatch(buyIceCreams());
const unsubscribe = () => console.log("Unsubscribed State: ", store.getState());
unsubscribe();
