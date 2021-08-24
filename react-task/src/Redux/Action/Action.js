import { GET_ERROR, GET_MATCOL } from "../constants/constant";

var arr = [];

export const getMatCol = (data) => {
  return {
    type: GET_MATCOL,
    payload: data,
  };
};

export const getError = (err) => {
  return {
    type: GET_ERROR,
    payload: err,
  };
};

export const getMatColAction = (data, id) => {
  arr = [id.material];
  let color = [id.color];
  return (dispatch) => {
    const list = data.filter(
      (item) =>
        (arr.includes(item.materialId) || id.material === "") &&
        (color.includes(item.colorId) || id.color === "")
    );
    dispatch(getMatCol(list));
  };
};
