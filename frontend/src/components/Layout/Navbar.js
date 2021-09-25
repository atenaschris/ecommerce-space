import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="row">
      <div>
        <Link className="brand" to="/">
          Space
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/who-we-are">Chi Siamo</Link>
        <Link to="/cart">Carrello</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </nav>
  );
};

export default Navbar;
