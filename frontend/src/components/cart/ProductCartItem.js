import React from "react";

const ProductCartItem = ({ cartItem }) => {
  const { product, name, image, price, countInStock, qty } = cartItem;
  return <div className="row">
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
         <select defaultValue={qty}>
             {[...Array(countInStock).keys()].map((el,i)=>(
                 <option key={i} value={el + 1} >{el + 1}</option>
             ))}
         </select>
      </div>
     
  </div>;
};

export default ProductCartItem;
