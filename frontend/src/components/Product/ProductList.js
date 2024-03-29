import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import LoadingBox from "../UI/LoadingBox";
import MessageBox from "../UI/MessageBox";
import { fetchProducts } from "../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { selectProductState } from "../../store";
import ProductNotFound from "../Layout/ProductNotFound";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector(selectProductState);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
     <section className="grid-products">
      {isLoading ? (
        <LoadingBox />
      ) : error ? (
       <ProductNotFound message={error} />
      ) : (
        products.map((product) => (
          <ProductItem
            key={product._id}
            id={product._id}
            name={product.name}
            category={product.category}
            image={product.image}
            price={product.price}
            brand={product.brand}
            rating={product.rating}
            numReviews={product.numReviews}
            description={product.description}
          />
        ))
      )}
    </section> 
  );
};

export default ProductList;
