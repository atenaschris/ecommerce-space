import React from "react";

import { useSelector } from "react-redux";
import { selectCartState } from "../../store";

const CheckoutForm = () => {
  const cartState = useSelector(selectCartState);
  const { cartItems, totalPrice } = cartState;

  const totalPriceFromatted = totalPrice.reduce((t, n) => {
    return t + n;
  }, 0);

  const TotalQuantityOfItemSelected = cartItems
    .map((el) => +el.qty)
    .reduce((t, n) => t + n, 0);

  console.log(TotalQuantityOfItemSelected);

  return (
    <div className="checkout-form-wrapper">
      <p>
        Quantità di prodotti totali{" "}
        {`(${
          TotalQuantityOfItemSelected > 1
            ? `${TotalQuantityOfItemSelected} prodotti`
            : `${TotalQuantityOfItemSelected} prodotto`
        }) : € ${totalPriceFromatted}`}
      </p>

      <div className="checkout-actions">
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default CheckoutForm;
