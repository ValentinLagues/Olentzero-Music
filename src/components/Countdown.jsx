import React, { useEffect, useState } from "react";
import "./countdown.css";

function Countdown({darkMode}) {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-12-25`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span className="timeleft">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div className="countdown-container">
      <div className={darkMode ? "dark-countdown-container-2" : "countdown-container-2"}>
        <p className="countdown-christmas">{darkMode ? "Christmas Countdown" : "(Christmas Countdown)"}</p>
        {timerComponents.length ? (
          <div className="countdown-date">{timerComponents}</div>
        ) : (
          <span>Merry Christmas!</span>
        )}
      </div>
    </div>
  );
}

export default Countdown;
