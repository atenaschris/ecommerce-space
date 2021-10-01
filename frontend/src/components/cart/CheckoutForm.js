import React from "react";

import { useSelector } from "react-redux";
import { selectCartState } from "../../store";
import {useHistory} from 'react-router';

const CheckoutForm = () => {
  const cartState = useSelector(selectCartState);
  const { cartItems, totalPrice } = cartState;
  const history = useHistory();

  const totalPriceOfTheItems = totalPrice.reduce((t,n)=>t+n,0);

  console.log(totalPriceOfTheItems)

  const TotalQuantityOfItemSelected = cartItems
    .map((el) => +el.qty)
    .reduce((t, n) => t + n, 0);

  console.log(TotalQuantityOfItemSelected);

  let noproducts = TotalQuantityOfItemSelected === 0;   

  console.log(noproducts);

  const checkoutHandler = ()=>{
    history.push('signin?redirect=shipping');
  }

  return (
    <div className="checkout-form-wrapper">
      <p>
        Quantità di prodotti totali:{" "}
        {TotalQuantityOfItemSelected === 1
          ? TotalQuantityOfItemSelected + " prodotto"
          : TotalQuantityOfItemSelected + " prodotti"}
      </p>
      <p>
        Totale : ${totalPriceOfTheItems}
      </p>

      <div className="checkout-actions">
        <button onClick={checkoutHandler} disabled={noproducts}>Checkout</button>
      </div>
    </div>
  );
};

export default CheckoutForm;
