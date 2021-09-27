import React from "react";

import { useParams } from "react-router";
import { useLocation } from "react-router";

const CartPage = () => {
  const params = useParams();

  const location = useLocation();

  const { id } = params;

  console.log(id);

  const qty = +location.search.split("=")[1];

  console.log(qty);

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
