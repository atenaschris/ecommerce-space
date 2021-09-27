import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
  PRODUCT_DETAIL_FAIL_NOT_FOUND,
} from "../constants/productConstants";

import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
  try {
    const { data } = await axios.get("/api/products");
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.message,
    });
  }
};

export const fetchProductDetail = (ProductId) => async (dispatch) => {
  console.log(ProductId);
  dispatch({
    type: PRODUCT_DETAIL_REQUEST,
  });
  try {
    const { data } = await axios.get("/api/products");
    const filteredProduct = data.find((el) => el._id === ProductId);
    console.log(filteredProduct);
    if (!filteredProduct) {
      dispatch({
        type: PRODUCT_DETAIL_FAIL_NOT_FOUND,
        payload: { message: "The product you are finding does not exists!!!" },
      });
    } else if (filteredProduct) {
      dispatch({
        type: PRODUCT_DETAIL_SUCCESS,
        payload: filteredProduct,
      });
    }
  } catch (err) {
    dispatch({
      type: PRODUCT_DETAIL_FAIL,
      payload: err.message,
    });
  }
};
