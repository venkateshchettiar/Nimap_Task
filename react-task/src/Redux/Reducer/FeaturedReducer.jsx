import { GET_ERROR, GET_FEATURED } from "../constants/constant";

const initialData = {
  allProducts: [],
  loading: true,
  error: "",
};

export const FeaturedReducers = (state = initialData, action) => {
  switch (action.type) {
    case GET_FEATURED: {
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
