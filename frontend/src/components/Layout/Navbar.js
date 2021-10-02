import React from "react";
import { Link } from "react-router-dom";
import { selectCartState,selectAuthState } from "../../store";

import { useSelector } from "react-redux";

const Navbar = () => {

  const {cartItems} = useSelector(selectCartState);

  const {user} = useSelector(selectAuthState);

 

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
        {!user.name && <Link to="/signin">Sign In</Link> }
        {user.name && <Link to="/">logout</Link>}
      </div>
    </nav>
  );
};

export default Navbar;
