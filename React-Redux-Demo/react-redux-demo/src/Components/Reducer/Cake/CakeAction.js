import { BUY_CAKE, RETURN_CAKE } from "./CakeType.js";

export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};

export const returnCake = () => {
  return {
    type: RETURN_CAKE,
  };
};

//export default { buyCake, returnCake };
