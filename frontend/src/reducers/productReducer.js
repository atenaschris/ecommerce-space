import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";

export const ProductReducer = (
  state = { products: [], isLoading: true, error: null },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { products: [], isLoading: true, error: null };
    case PRODUCT_LIST_SUCCESS:
      return { products: action.payload, isLoading: false, error: null };
    case PRODUCT_LIST_FAIL:
      return { products: [], isLoading: false, eror: action.payload };

    default:
      return state;
  }
};
