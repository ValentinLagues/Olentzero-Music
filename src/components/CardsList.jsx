import React, { useState } from "react";
import "./cardslist.css";
import Card from "./Card";
import calendar from "../data";

const CardsList = () => {
    const [activeId, setActiveId] = useState(0);

    // console.log(activeId)

    return (
        <div className="cardsGrid">
        {calendar.map((day) => (
            <Card 
                setActiveId={setActiveId}
                activeId={activeId}
                number={day.number}
                image={day.image}
                track={day.url}
            />
        ))}
        </div>
    );
};

export default CardsList;
