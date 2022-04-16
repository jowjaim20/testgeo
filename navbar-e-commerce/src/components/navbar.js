import "./navbar.scss";
import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="sign-in">
        <h1 className="sign-in__h1">
          <span className="sign-in__span sign-in__span-1">Hi!</span>
          <span className="sign-in__span sign-in__span-2">Sign-in</span>
          <span className="sign-in__span sign-in__span-3">or</span>
          <span className="sign-in__span sign-in__span-4">Register</span>
        </h1>
      </div>
      <div className="nav-list">
        <nav className="list">
          <ul className="ul">
            <li>Daily Deals</li>
            <li>Sell</li>
            <li>Help & Contact</li>
          </ul>
        </nav>
      </div>
      <div className="bag">
        <div className="cart">
          <span className="cart__label">&#x1F6D2;</span>
          <span className="cart__label">Your bag:</span>
          <span className="cart__price">$0</span>
        </div>
      </div>
    </div>
  );
};
