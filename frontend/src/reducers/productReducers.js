import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
  PRODUCT_DETAIL_FAIL_NOT_FOUND
} from "../constants/productConstants";

export const ProductReducer = (
  state = { products: [], isLoading: true, error: null },
  action
) => {
  console.log(action);
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { products: [], isLoading: true, error: null };
    case PRODUCT_LIST_SUCCESS:
      return { products: action.payload, isLoading: false, error: null };
    case PRODUCT_LIST_FAIL:
      return { products: [], isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const SingleProductReducer = (
  state = { singleProduct: {}, isLoading: true, error: null, notFoundError:null },
  action
) => {
  console.log(action);
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return { singleProduct: {}, isLoading: true, error: null,notFoundError:null };
    case PRODUCT_DETAIL_SUCCESS:
      return { singleProduct: action.payload, isLoading: false, error: null,notFoundError:null };
    case PRODUCT_DETAIL_FAIL:
      return { singleProduct: [], isLoading: false, error: action.payload , notFoundError:null };
    case PRODUCT_DETAIL_FAIL_NOT_FOUND:
      return {singleProduct : [],isLoading:false , error:null, notFoundError:action.payload}
    default:
      return state;
  }
};
