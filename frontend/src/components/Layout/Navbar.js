import React from "react";
import { Link } from "react-router-dom";
import { selectCartState } from "../../store";

import { useSelector } from "react-redux";

const Navbar = () => {

  const cartState = useSelector(selectCartState);

  const {cartItems} = cartState;

  return (
    <nav className="row">
      <div>
        <Link className="brand" to="/">
          Space
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/who-we-are">Chi Siamo</Link>
        <Link to="/cart"><i class="fas fa-shopping-cart  "></i>{cartItems.length > 0 &&<div className="badge"><span>{cartItems.length}</span></div> }</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </nav>
  );
};

export default Navbar;
