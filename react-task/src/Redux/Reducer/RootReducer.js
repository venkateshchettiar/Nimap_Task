import { combineReducers } from "redux";
import { AddToCartReducers } from "./AddToCartReducer";
import { AllProductReducers } from "./AllProductReducer";
import { FeaturedReducers } from "./FeaturedReducer";

export const rootReducer = combineReducers({
  AllProductData: AllProductReducers,
  FeaturedData: FeaturedReducers,
  AddData: AddToCartReducers,
});
