import React from "react";

const ProductCartItem = ({ cartItem }) => {
  const { product, name, image, price, countInStock, qty } = cartItem;
  return <div className="row">
      <figure className="product-cart-item-img">
          <img src={image} alt={name} />
      </figure>
      <div>
          Titolo:<br/><br/> {name}
      </div>
      <div>
          Taglia:<br/><br/> 36
      </div>
      <div>
          Prezzo:<br/><br/> £{price}
      </div>
      <div className="row">
          <button>+</button>
          <button>-</button>
      </div>
     
  </div>;
};

export default ProductCartItem;
