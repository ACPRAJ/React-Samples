import { BUY_ICE_CREAM, RETURN_ICE_CREAM } from "./IceCreamConstants";

export const buyIceCream = () => {
  return {
    type: BUY_ICE_CREAM,
  };
};

export const returnIceCream = () => {
  return {
    type: RETURN_ICE_CREAM,
  };
};
