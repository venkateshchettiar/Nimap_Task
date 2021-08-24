import { GET_ERROR, GET_MATCOL } from "../constants/constant";

const initialData = {
  matCol: [],
  loading: true,
  error: "",
};

export const AllMatColReducers = (state = initialData, action) => {
  switch (action.type) {
    case GET_MATCOL: {
      return {
        ...state,
        loading: false,
        matCol: action.payload,
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
