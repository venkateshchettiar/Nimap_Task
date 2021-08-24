import { GET_ERROR, GET_FEATURED, GET_PRODUCT } from "../constants/constant";
import Axios from "axios";

export const getAllProduct = (data) => {
  return {
    type: GET_PRODUCT,
    payload: data,
  };
};

export const getFeaturedProduct = (data) => {
  return {
    type: GET_FEATURED,
    payload: data,
  };
};

export const getError = (err) => {
  return {
    type: GET_ERROR,
    payload: err,
  };
};

export const getAllProductAction = () => {
  return async (dispatch) => {
    await Axios.get(
      "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products"
    )
      .then((response) => {
        // console.log(response.data);
        dispatch(getAllProduct(response.data.products));
      })
      .catch((error) => {
        dispatch(getError(error.message));
      });
  };
};
