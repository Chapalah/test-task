import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";

const NavigationItem = ({ navItem, subNav }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    setIsOpen(!isOpen);
    e.currentTarget.classList.toggle("navigation__item-last");
  };

  return (
    <ul className="navigation__ul">
      <li className="navigation__item" onClick={handleClick}>
        <p>{navItem}</p>
        {isOpen ? (
          <img src="../img/Vector1.svg" alt="svg" />
        ) : (
          <img src="../img/Vector.svg" alt="svg" />
        )}
      </li>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <ul className="subnav__ul">
          {subNav.map((item, index) => (
            <li className="subnav__item" key={index}>
              <button className="subnav__button">
                <p>{item}</p>
              </button>
            </li>
          ))}
        </ul>
      </Collapse>
    </ul>
  );
};

export default NavigationItem;
