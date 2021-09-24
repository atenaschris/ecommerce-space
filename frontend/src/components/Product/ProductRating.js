import React from "react";

const ProductRating = ({ rating, numReviews }) => {
  const firstStarClasses = `${
    rating >= 1
      ? "fas fa-star"
      : rating >= 0.5
      ? "fas fa-star-half-alt"
      : "far fa-star"
  }`;
  const secondStarClasses = `${
    rating >= 2
      ? "fas fa-star"
      : rating >= 1.5
      ? "fas fa-star-half-alt"
      : "far fa-star"
  }`;
  const thirdStarClasses = `${
    rating >= 3
      ? "fas fa-star"
      : rating >= 2.5
      ? "fas fa-star-half-alt"
      : "far fa-star"
  }`;
  const fourthStarClasses = `${
    rating >= 4
      ? "fas fa-star"
      : rating >= 3.5
      ? "fas fa-star-half-alt"
      : "far fa-star"
  }`;
  const fifthStarClasses = `${
    rating >= 5
      ? "fas fa-star"
      : rating >= 4.5
      ? "fas fa-star-half-alt"
      : "far fa-star"
  }`;
  return (
    <>
      <ul className="row">
        <li>
          <i className={firstStarClasses}></i>
        </li>
        <li>
          <i className={secondStarClasses}></i>
        </li>
        <li>
          <i className={thirdStarClasses}></i>
        </li>
        <li>
          <i className={fourthStarClasses}></i>
        </li>
        <li>
          <i className={fifthStarClasses}></i>
        </li>
      </ul>
      <p>{numReviews} reviews</p>
    </>
  );
};

export default ProductRating;
