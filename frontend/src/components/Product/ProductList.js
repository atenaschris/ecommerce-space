import React from "react";
import data from "../../data";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const { products } = data;
  return (
    <section className="grid-products">
      {products.map((product) => (
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
      ))}
    </section>
  );
};

export default ProductList;
