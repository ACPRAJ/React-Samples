import { BUY_CAKE, RETURN_CAKE } from "./CakeConstants.js";

export const buyCake = (cakeInput = 1) => {
  return {
    type: BUY_CAKE,
    payload: cakeInput,
  };
};

export const returnCake = (cakeInput = 1) => {
  return {
    type: RETURN_CAKE,
    payload: cakeInput,
  };
};

//export default { buyCake, returnCake };
