import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import axios from "axios";
import LoadingBox from "../UI/LoadingBox";
import MessageBox from "../UI/MessageBox";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const getAllProducts = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("/api/products");

      setProducts(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <section className="grid-products">
      {loading ? (
        <LoadingBox/>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
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
