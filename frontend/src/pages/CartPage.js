import React, { useEffect } from "react";

import { useParams } from "react-router";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

const CartPage = () => {
  const params = useParams();

  const location = useLocation();

  const dispatch = useDispatch();

  const { id } = params;

  console.log(id);

  const qty = +location.search.split("=")[1];

  console.log(qty);

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [id, qty, dispatch]);

  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        Add to cart : ProductId : {id} Qty : {qty}
      </p>
    </div>
  );
};

export default CartPage;
