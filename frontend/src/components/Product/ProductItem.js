import React from "react";
import { Link } from "react-router-dom";
import ProductRating from "./ProductRating";

const ProductItem = ({
  _id,
  name,
  category,
  image,
  price,
  brand,
  rating,
  numReviews,
  description,
}) => {
  const detailPath = `/product/${_id}`;
  return (
    <Link to={detailPath}>
      <div key={_id} className="product-wrapper">
        <figure>
          <img src={image} alt={name} />
          <div className="details-wrapper">
            <h2>{name}</h2>
            <ProductRating rating={rating} numReviews={numReviews} />
            <p>{price} € </p>
          </div>
        </figure>
      </div>
    </Link>
  );
};

export default ProductItem;
