import React from "react";
import "./cardslist.css";
import Card from "./Card";
import calendar from "../data";

const CardsList = () => {
  return (
    <div className="cardsGrid">
      {calendar.map((day, index) => (
        <Card key={index} number={day.number} image={day.image} />
      ))}
    </div>
  );
};

export default CardsList;
