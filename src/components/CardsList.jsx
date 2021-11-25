import React from "react";
import "./cardslist.css";
import Card from "./Card";
import calendar from "../data";

const CardsList = () => {
  console.log(calendar[0].url);
  return (
    <div className="cardsGrid">
      {calendar.map((day, index) => (
        <Card
          key={index}
          number={day.number}
          image={day.image}
          track={day.url}
        />
      ))}
    </div>
  );
};

export default CardsList;
