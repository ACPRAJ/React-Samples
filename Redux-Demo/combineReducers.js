const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAMS = "BUY_ICE_CREAMS";

function buyCakes() {
  return {
    type: BUY_CAKE,
  };
}

function buyIceCreams() {
  return {
    type: BUY_ICE_CREAMS,
  };
}

const initialCakeState = {
  numberOfCakes: 10,
};

const initialIceCreamState = {
  numberOfIceCreams: 20,
};

function cakeReducer(state = initialCakeState, action) {
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

function iceCreamReducer(state = initialIceCreamState, action) {
  switch (action.type) {
    case BUY_ICE_CREAMS:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer);

console.log("Initial State", store.getState());
//const unsubscribe = store.subscribe(() => console.log("Updated State: ", store.getState()))
store.subscribe(() => console.log("Subscribed: ", store.getState()));
store.dispatch(buyCakes());
store.dispatch(buyCakes());
store.dispatch(buyCakes());
store.dispatch(buyIceCreams());
store.dispatch(buyIceCreams());
store.dispatch(buyIceCreams());
const unsubscribe = () => console.log("Unsubscribed State: ", store.getState());
unsubscribe();
