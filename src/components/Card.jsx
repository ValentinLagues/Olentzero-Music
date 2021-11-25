import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./card.css";

const Card = ({ title, track, cover, number, image }) => {
  const [cardReturn, setCardreturn] = useState(true);
  console.log(number);
  return (
    <>
      <div className="container" onClick={() => setCardreturn(!cardReturn)}>
        {cardReturn && (
          <div>
            <img src={image} alt="{}" />
            <h1>{number}</h1>
          </div>
        )}

        {!cardReturn && (
          <div>
            <ReactPlayer url={track} controls playing volume={0.1} />
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
