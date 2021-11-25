import React, { useState } from "react";
import "./cardslist.css";
import Card from "./Card";
import calendar from "../data";

const CardsList = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="grid-avent">
      {calendar.map((day, index) => (
        <Card
          key={index}
          number={day.number}
          image={day.image}
          track={day.url}
          lottie={day.lottie}
          setActiveCard={setActiveCard}
          activeCard={activeCard}
        />
      ))}
    </div>
  );
};

export default CardsList;
