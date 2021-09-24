import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="App">
      <div className="grid-container">
        <Navbar />
        <main>{props.children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
