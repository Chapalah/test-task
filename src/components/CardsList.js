import React from "react";
import Card from "./Card";

const CardsList = ({ cards }) => {
  return (
    <div className="cards">
      {cards.map((item, index) => (
        <Card card={item} key={index} />
      ))}
    </div>
  );
};

export default CardsList;
