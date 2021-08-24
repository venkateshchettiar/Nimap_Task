import Axios from "axios";
import { GET_ERROR, GET_FEATURED } from "../constants/constant";

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

export const getFeaturedAction = () => {
  return async (dispatch) => {
    await Axios.get(
      "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/featured"
    )
      .then((response) => {
        dispatch(getFeaturedProduct(response.data.featured));
      })
      .catch((error) => {
        dispatch(getError(error.message));
      });
  };
};
