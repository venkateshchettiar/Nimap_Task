import { ADD_PRODUCT } from "../constants/constant";

export const AddToCart = () => {
  return {
    type: ADD_PRODUCT,
    // payload: data,
  };
};

export const AddToCartAction = () => {
  return async (dispatch) => {
    console.log("AddToCart");
    dispatch(AddToCart());
  };
};

// return async (dispatch) => {
//   await dispatch(AddToCart);
// };
