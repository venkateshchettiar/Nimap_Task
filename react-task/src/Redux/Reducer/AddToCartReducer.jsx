import { ADD_PRODUCT, GET_ERROR } from "../constants/constant";

const initialData = {
  counter: 0,
  loading: true,
  error: "",
};

export const AddToCartReducers = (state = initialData, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        loading: false,
        counter: state.counter + 1,
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
