import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./card.css";

const Card = ({ title, track, cover, number, image, setPlaying, playing }) => {
  const [cardReturn, setCardreturn] = useState(true);

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
              className="player"
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
