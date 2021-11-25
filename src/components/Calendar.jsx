import React from "react";
import calendar from "../data";

const Calendar = () => {
  return (
    <div>
      {calendar.map((day) => {
        return (
          <div>
            <h1>{day.number}</h1>
            <img src={day.image}></img>
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
