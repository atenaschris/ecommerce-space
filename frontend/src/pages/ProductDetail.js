import React from "react";
import ProductRating from "../components/Product/ProductRating";

import { useParams } from "react-router";

import data from "../data";

const ProductDetail = () => {
  const params = useParams();
  console.log(params);
  const ProductId = params.productId;

  const product = data.products.filter((product)=>product._id === ProductId);

  console.log(product);

  return (
    <section className="grid-detail">
      <figure className="product-detail-image-section">
        <img src="https://picsum.photos/200/300?a=2" alt="Image" />
      </figure>
      <div className="product-detail-details-section">
        <h2>Product Title</h2>
        <ProductRating />
        <p>Price : $ 100</p>
        <p>Description: High quality product</p>
      </div>
      <div className="product-detail-add-to-chart">
        <div className="row">
          <p>Price</p>
          <p>$ 100</p>
        </div>
        <div className="row">
          <p>Status</p>
          <p>in Stock</p>
        </div>
        <div>
          <button>Add to Cart</button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
