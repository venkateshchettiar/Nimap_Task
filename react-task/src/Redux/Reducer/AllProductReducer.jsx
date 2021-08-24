import { GET_ERROR, GET_PRODUCT } from "../constants/constant";

const initialData = {
  allProducts: [],
  loading: true,
  error: "",
};

export const AllProductReducers = (state = initialData, action) => {
  switch (action.type) {
    case GET_PRODUCT: {
      return {
        ...state,
        loading: false,
        allProducts: action.payload,
      };
    }
    case GET_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
