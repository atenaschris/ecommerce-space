import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import ProductCartList from "../components/cart/ProductCartList";
import { selectCartState } from "../store";
import { useSelector } from "react-redux";
import CheckoutForm from "../components/cart/CheckoutForm";
const CartPage = () => {
  const params = useParams();

  const location = useLocation();

  const dispatch = useDispatch();

  const cartState = useSelector(selectCartState);

  const { cartItems } = cartState;

  const { id } = params;

  console.log(id);

  const qty = +location.search.split("=")[1];

  console.log(qty);

  const numOfProductsInTheCart = cartItems.length;

  useEffect(() => {
    if (id && qty) {
      dispatch(addToCart(id, qty));
    }
  }, [id, qty, dispatch]);

  return (
    <div className="grid-cart-page">
      <h2>
        Benventi nel nostro carrello!! Hai selezionato{" "}
        {numOfProductsInTheCart === 1
          ? numOfProductsInTheCart + " prodotto"
          : numOfProductsInTheCart + " prodotti"}
      </h2>
      <ProductCartList />
      <CheckoutForm />
    </div>
  );
};

export default CartPage;
