import React from "react";
import { Link } from "react-router-dom";
import { selectCartState, selectAuthState } from "../../store";

import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../actions/authActions";

const Navbar = () => {
  const { cartItems } = useSelector(selectCartState);

  const { user } = useSelector(selectAuthState);

  const dispatch = useDispatch();

  console.log(user);

  return (
    <nav className="row">
      <div>
        <Link className="brand" to="/">
          Space
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/who-we-are">Chi Siamo</Link>
        <Link to="/cart">
          <i class="fas fa-shopping-cart"></i>
          {cartItems.length > 0 && (
            <div className="badge">
              <span>{cartItems.length}</span>
            </div>
          )}
        </Link>
        {user?.name ? (
          <Link to="/" onClick={() => dispatch(logoutUser())}>
            Logout
          </Link>
        ) : (
          <Link to="/signin">Sign In</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
