import "./NavBar2.scss";
import React from "react";

export const Navbar2 = () => {
  return (
    <div className="navbar2">
      <div className="navbar2__tittle">
        <h1>Shoppemate</h1>
      </div>
      <div className="navbar2__items">
        <ul>
          <li>Women</li>
          <li>Men</li>
          <li>Kids</li>
          <li>Shoes</li>
          <li>Brands</li>
        </ul>
      </div>
      <div className="navbar2__searchbar">
        <input
          type="text"
          className="navbar2__input"
          placeholder="&#128269; Search Anything"
        />
      </div>
    </div>
  );
};
