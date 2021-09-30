import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeItemFromCart } from "../../actions/cartActions";

const ProductCartItem = ({ cartItem }) => {
  const { product, name, image, price, countInStock, qty } = cartItem;
  const [newqty, setNewQty] = useState(qty);
  const [newqtySelected, setNewQtySelected] = useState(false);
  const dispatch = useDispatch();

  const setQtyHandler = (e) => {
    setNewQty(e.target.value);
    setNewQtySelected(true);
  };

  const removeCartItemHandler = () => {
    dispatch(removeItemFromCart(product, qty));
  };

  useEffect(() => {
    if (newqty && newqtySelected) {
      dispatch(addToCart(product, newqty));
      setNewQtySelected(false);
    }
  }, [product, newqty, newqtySelected, dispatch]);

  return (
    <div className="product-cart-item-wrapper">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="product-cart-item-details-wrapper">
        <div>
          <p>Titolo:</p>
          <p>{name}</p>
        </div>
        <div>
          <p>Taglia:</p>
          <p>36</p>
        </div>
        <div>
          <p>Prezzo: </p>
          <p>£{price}</p>
        </div>
        <div>
          <p>Amount:</p>
          <select value={qty} onChange={setQtyHandler}>
            {[...Array(countInStock).keys()].map((el, i) => (
              <option key={i} value={el + 1}>
                {el + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="button-remove">
          <button onClick={removeCartItemHandler}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCartItem;
