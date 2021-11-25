import { useState } from "react";
import "./cardslist.css";
import Card from "./Card";
import calendar from "../data";

const CardsList = () => {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="cardsGrid">
      {calendar.map((day) => (
        <Card
          number={day.number}
          image={day.image}
          setPlaying={setPlaying}
          playing={playing}
        />
      ))}
    </div>
  );
};

export default CardsList;
