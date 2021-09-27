import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
} from "../constants/productConstants";

export const ProductReducer = (
  state = { products: [], isLoading: true, error: null },
  action
) => {
  console.log(action);
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { isLoading: true };
    case PRODUCT_LIST_SUCCESS:
      return { products: action.payload, isLoading: false };
    case PRODUCT_LIST_FAIL:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const SingleProductReducer = (
  state = { singleProduct: {}, isLoading: true, error: null },
  action
) => {
  console.log(action);
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return { isLoading: true };
    case PRODUCT_DETAIL_SUCCESS:
      return { singleProduct: action.payload, isLoading: false };
    case PRODUCT_DETAIL_FAIL:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};
