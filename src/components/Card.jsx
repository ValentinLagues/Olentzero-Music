import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./card.css";
import "./cardslist.css";

const Card = ({ track, number, image }) => {
  const [playing, setPlaying] = useState(false);

  console.log(number);
  return (
    <div
      className={`day-${number} container`}
      onClick={() => setPlaying(!playing)}
    >
      <img src={image} alt="{}" />
      <h1>{number}</h1>
      {/* <ReactPlayer
        className="player"
        url={track}
        controls
        playing={playing}
        volume={0.1}
      /> */}
    </div>
  );
};

export default Card;
