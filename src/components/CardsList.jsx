import React from "react";
import "./cardslist.css";
import Card from "./Card";
import calendar from "../data";

const CardsList = () => {

    return (
        <div className="cardsGrid">
        {calendar.map((day) => (
            <Card number={day.number} image={day.image} track={day.url} />
        ))}
        </div>
    );
};

export default CardsList;
