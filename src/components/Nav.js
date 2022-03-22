import React from "react";

const NavBar = () => {
  return (
      <nav>
        <div className="navbar">
          <a href="/">Home</a>
          <a href="/products">Shop</a>
          <a href="/contact">Contact</a>
          <a href="/checkout" className="right">
            <i className="fa fa-shopping-cart" style={{fontSize: "18px"}}></i>
          </a>
        </div>
      </nav>
  );
};

export default NavBar;
