import React from "react";

import { useSelector } from "react-redux";
import { selectCartState } from "../../store";

const CheckoutForm = () => {
  const cartState = useSelector(selectCartState);
  const { cartItems, totalPrice } = cartState;

  const totalPriceFromatted = totalPrice.reduce((t, n) => {
    return t + n;
  }, 0);

  const numOfProductsInTheCart = cartItems.length;
  return (
    <div>
      {
        <p>
          Subtotal{" "}
          {`(${
            numOfProductsInTheCart > 1
              ? `${numOfProductsInTheCart} prodotti`
              : `${numOfProductsInTheCart} prodotto`
          }) : € ${totalPriceFromatted}`}
        </p>
      }
    </div>
  );
};

export default CheckoutForm;
