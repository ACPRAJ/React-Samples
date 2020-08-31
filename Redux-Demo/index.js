const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";

const action = () => {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
};

const initialState = {
  numberOfCakes: 10,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case BUY_CAKE:
      //console.log("Inside Buy_Cake");
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    default:
      //console.log("Inside default");
      return state;
  }
}

const store = createStore(reducer);
console.log("Initial State", store.getState());
//const unsubscribe = store.subscribe(() => console.log("Updated State: ", store.getState()))
store.subscribe(() => console.log("Subscribed: ", store.getState()));
store.dispatch(action());
store.dispatch(action());
store.dispatch(action());
const unsubscribe = () => console.log("Unsubscribed State: ", store.getState());
unsubscribe();
