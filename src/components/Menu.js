import React from "react";
import Navigation from "./Navigation";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__wrapper">
        <div className="menu__header">
          <img src="../img/Logo.svg" alt="logo" />
          <h2 className="menu__title">Careers</h2>
          <div className="menu__adaptive">
            <p>Choose YOUR Career</p>
            <img src="../img/Vector.svg" alt="svg" />
          </div>
        </div>
        <div className="menu__list">
          <div className="menu__line"></div>
          <Navigation />
          <div className="menu__line"></div>
          <button className="menu__btn">Show all programmes</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
