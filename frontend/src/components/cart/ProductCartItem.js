import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cartActions";

const ProductCartItem = ({ cartItem }) => {
  const { product, name, image, price, countInStock, qty } = cartItem;
  const [newqty, setNewQty] = useState(qty);
  const dispatch = useDispatch();

  const setQtyHandler = (e) => {
    setNewQty(e.target.value);
  };

  useEffect(() => {
    if (newqty) {
      dispatch(addToCart(product, newqty));
    }
  }, [product, newqty, dispatch]);

  return (
    <div className="row">
      <figure className="product-cart-item-img">
        <img src={image} alt={name} />
      </figure>
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
        <select value={newqty} onChange={setQtyHandler}>
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
  );
};

export default ProductCartItem;
