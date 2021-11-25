import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./card.css";

const Card = ({ title, track, cover, number, image }) => {
  const [cardReturn, setCardreturn] = useState(true);
  const [playing, setPlaying] = useState(false);
  return (
    <>
      <div className="container" onClick={() => setPlaying(!playing)}>
        {cardReturn && (
          <div onClick={() => setCardreturn(!cardReturn)}>
            <img src={image} alt="{}" />
            <h1>{number}</h1>
          </div>
        )}

        {!cardReturn && (
          <div>
            <ReactPlayer
              width="0"
              url={track}
              controls
              playing={playing}
              volume={0.1}
            />
          </div>
        )}
      </div>
    </>
  );
};
export default Card;
