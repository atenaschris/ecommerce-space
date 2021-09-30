import axios from "axios";
import { CART_ADD_ITEM, REMOVE_ITEM } from "../constants/cartConstants";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${productId}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  localStorage.setItem(
    "totalPrice",
    JSON.stringify(getState().cart.totalPrice)
  );
};

export const removeItemFromCart =
  (ProductId, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${ProductId}`);

    dispatch({
      type: REMOVE_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        product: data._id,
        qty,
      },
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
    localStorage.setItem(
      "totalPrice",
      JSON.stringify(getState().cart.totalPrice)
    );
  };
