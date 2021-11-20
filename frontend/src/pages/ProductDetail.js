import React, { useState } from "react";
import ProductRating from "../components/Product/ProductRating";

import { useHistory, useParams } from "react-router";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import ProductNotFound from "../components/Layout/ProductNotFound";
import { fetchProductDetail } from "../actions/productActions";
import LoadingBox from "../components/UI/LoadingBox";
import { selectSingleProductState } from "../store";
import { addToCart } from "../actions/cartActions";

const ProductDetail = () => {
  const [qty, setQty] = useState(1);
  const params = useParams();
  console.log(params);

  const dispatch = useDispatch();

  const ProductId = params.productId;

  console.log(typeof ProductId);

  const history = useHistory();

  const singleProductState = useSelector(selectSingleProductState);

  const { singleProduct, isLoading, error } = singleProductState;

  useEffect(() => {
    dispatch(fetchProductDetail(ProductId));
  }, [dispatch, ProductId]);

  const addToCartHandler = () => {
    history.push(`/cart/${ProductId}?qty=${qty}`);
  };

  return (
    <>
      {isLoading ? (
        <p>
          <LoadingBox />
        </p>
      ) : error ? (
        <ProductNotFound message={error} />
      ) : (
        <section className="grid-detail">
          <figure className="product-detail-image-section">
            <img src={singleProduct.image} alt={singleProduct.name} />
          </figure>
          <div className="product-detail-details-section">
            <h2>{singleProduct.name}</h2>
            <ProductRating
              rating={singleProduct.rating}
              numreviews={singleProduct.numReviews}
            />
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
            {singleProduct.countInStock > 0 && (
              <>
                <div className="row qty">
                  <div>Qty</div>
                  <div>
                    <select value={qty} onChange={(e) => setQty(e.target.value)}>
                      {[...Array(singleProduct.countInStock).keys()].map(
                        (el) => (
                          <option value={el + 1} key={el + 1}>
                            {el + 1}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>
                <div>
                  <button onClick={addToCartHandler}>Add to Cart</button>
                </div>
              </>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetail;
