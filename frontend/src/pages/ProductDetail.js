import React from "react";
import ProductRating from "../components/Product/ProductRating";

import { useParams } from "react-router";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import ProductNotFound from "../components/Layout/ProductNotFound";
import { fetchProductDetail } from "../actions/productActions";
import LoadingBox from "../components/UI/LoadingBox";
import MessageBox from "../components/UI/MessageBox";

const ProductDetail = () => {
  const params = useParams();
  console.log(params);

  const ProductId = params.productId;

  console.log(typeof(ProductId));

  const dispatch = useDispatch();

  const selectSingleProductState = useSelector((state) => state.singleProduct);

  const { singleProduct, isLoading, error } = selectSingleProductState;

  useEffect(() => {
    dispatch(fetchProductDetail(+ProductId));
  }, [ProductId]);

  return (
    <section className="grid-detail">
      {isLoading ? (
        <p>
          <LoadingBox />
        </p>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : singleProduct.name ? (
        <>
          <figure className="product-detail-image-section">
            <img src={singleProduct.image} alt={singleProduct.name} />
          </figure>
          <div className="product-detail-details-section">
            <h2>{singleProduct.name}</h2>
            <ProductRating rating={singleProduct.rating} numreviews={singleProduct.numReviews} />
            <p>Price : $ {singleProduct.price}</p>
            <p>Description: {singleProduct.description}</p>
          </div>
          <div className="product-detail-add-to-chart">
            <div className="row">
              <p>Price</p>
              <p>$ {singleProduct.price}</p>
            </div>
            <div className="row column">
              <p>Status:</p>
              {singleProduct.countInStock > 0 ? (
                <p className="available">in Stock</p>
              ) : (
                <p className="unavailable">Unavailable</p>
              )}
            </div>
            <div>
              <button>Add to Cart</button>
            </div>
          </div>
        </>
      ) : (
        <ProductNotFound />
      )}
    </section>
  );
};

export default ProductDetail;
