import React, { useState } from "react";
import "./cardslist.css";
import Card from "./Card";
import CardDark from "./CardDark";
import calendar from "../data";
import darkCalendar from "../dark-data";

const CardsList = ({ darkMode }) => {
  const [activeCard, setActiveCard] = useState(0);
  const [activeDarkCard, setActiveDarkCard] = useState(0);
  const [cardReturn, setCardReturn] = useState(0);
  const [cardDarkReturn, setCardDarkReturn] = useState(0);

  return (
    <div className={darkMode ? "grid-advent-dark" : "grid-advent"}>
      {darkMode
        ? darkCalendar.map((day, index) => (
            <CardDark
              cardDarkReturn={cardDarkReturn}
              setCardDarkReturn={setCardDarkReturn}
              key={index}
              number={day.number}
              image={day.image}
              track={day.url}
              lottie={day.lottie}
              setActiveDarkCard={setActiveDarkCard}
              activeDarkCard={activeDarkCard}
            />
          ))
        : calendar.map((day, index) => (
            <Card
              cardReturn={cardReturn}
              setCardReturn={setCardReturn}
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
